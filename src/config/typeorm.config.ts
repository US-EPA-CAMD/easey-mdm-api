import { LoggerOptions } from 'typeorm';

require('dotenv').config();
import { TlsOptions } from 'tls';
import { readFileSync } from 'fs';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  private tlsOptions: TlsOptions = { requestCert: true };

  constructor(private readonly configService: ConfigService) {
    const host = configService.get<string>('database.host');
    this.tlsOptions.rejectUnauthorized = (host !== 'localhost');
    this.tlsOptions.ca = (host !== 'localhost')
      ? readFileSync("./us-gov-west-1-bundle.pem").toString()
      : null;
    console.log('TLS/SSL Config:', {
      ...this.tlsOptions,
      ca: (this.tlsOptions.ca !== null)
        ? `${this.tlsOptions.ca.slice(0, 30)}...(truncated for display only)`
        : null
    });
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    // Values are: true | false | 'all' | 'query', 'error', 'schema', 'warn', 'info', 'log'
    const rawLogging = this.configService.get<string>('app.sqlLogging');
    const sqlLogging: LoggerOptions = rawLogging === 'false'
      ? false
      : rawLogging.split(',').map(level => level.trim()) as LoggerOptions;

    const host = this.configService.get<string>('database.host');
    const replicaHost = this.configService.get<string>('database.replicaHost');

    const replicaAccessEnabled = this.configService.get<boolean>('app.enableReplicaDbAccess');

    // Common configuration shared between replication and single connection modes
    const commonConfig = {
      type: 'postgres' as const,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: false,
      extra: {
        max: this.configService.get<number>('app.maxConnectionPool'),                                 // Max connections in pool
        idleTimeoutMillis: this.configService.get<number>('app.idleTimeout'),                         // Close idle connections
        connectionTimeoutMillis: this.configService.get<number>('app.connectionTimeout'),             // Maximum time (ms) to wait for a new connection before timing out.
        statement_timeout: this.configService.get<number>('app.statementTimeout'),                    // Terminates queries that exceed the timeout (in ms).
        idle_in_transaction_session_timeout: this.configService.get<number>('app.idleInTransactionSessionTimeout'), // Terminates idle transactions after the specified time (in ms).
        maxUses: this.configService.get<number>('app.maxUsesBeforeRecreatingConnection'), //Recreate connections after 'n' uses
      },
      logging: sqlLogging,
      maxQueryExecutionTime: this.configService.get<number>('app.maxQueryExecutionTime'),
    };

    // Use replication only when replica host is different from primary host
    if (replicaAccessEnabled && replicaHost && replicaHost !== host) {
    return {
      ...commonConfig,
      replication: {
        master: {
      applicationName: this.configService.get<string>('app.name'),
      host: host,
      port: this.configService.get<number>('database.port'),
      username: this.configService.get<string>('database.user'),
      password: this.configService.get<string>('database.pwd'),
      database: this.configService.get<string>('database.name'),
      ssl: this.tlsOptions,
        },
        slaves: [{
          applicationName: this.configService.get<string>('app.name'),
          host: replicaHost,
          port: this.configService.get<number>('database.port'),
          username: this.configService.get<string>('database.user'),
          password: this.configService.get<string>('database.pwd'),
          database: this.configService.get<string>('database.name'),
          ssl: this.tlsOptions,
        }],
        defaultMode: 'slave'
      },
    };
    } else {
      // Use single connection when no replica or same host
      return {
        ...commonConfig,
        applicationName: this.configService.get<string>('app.name'),
        host: host,
        port: this.configService.get<number>('database.port'),
        username: this.configService.get<string>('database.user'),
        password: this.configService.get<string>('database.pwd'),
        database: this.configService.get<string>('database.name'),
        ssl: this.tlsOptions,
      };
    }
  }
}
