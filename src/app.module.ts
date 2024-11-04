import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dbConfig } from '@us-epa-camd/easey-common/config';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { CorsOptionsModule } from '@us-epa-camd/easey-common/cors-options';
import { MaintenanceMiddleware } from '@us-epa-camd/easey-common/middleware/maintenance.middleware';
import { HttpModule } from '@nestjs/axios';

import routes from './routes';
import appConfig from './config/app.config';
import { TypeOrmConfigService } from './config/typeorm.config';
import { AccountTypeModule } from './account-type/account-type.module';
import { ControlTechnologyModule } from './control-technology/control-technology.module';
import { FuelTypeModule } from './fuel-type/fuel-type.module';
import { ProgramModule } from './program/program.module';
import { ReportingPeriodModule } from './reporting-period/reporting-period.module';
import { UnitTypeModule } from './unit-type/unit-type.module';
import { MasterDataModule } from './master-data/master-data.module';
import { RelationshipsModule } from './relationships/relationships.module';

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ dbConfig, appConfig ],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    LoggerModule,
    CorsOptionsModule,
    AccountTypeModule,
    ControlTechnologyModule,
    FuelTypeModule,
    ProgramModule,
    ReportingPeriodModule,
    UnitTypeModule,
    RelationshipsModule,
    // MASTER DATA MODULE MUST ALWAYS BE AFTER ALL OTHERS
    // IN ORDER FOR ROUTES TO PROPERLY WORK    
    MasterDataModule,
    HttpModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MaintenanceMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}