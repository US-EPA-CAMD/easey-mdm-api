import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from 'nest-router';
import { TypeOrmConfigService } from './config/typeorm.config';

import routes from './routes';
import dbConfig from './config/db.config';
import appConfig from './config/app.config';
import { UnitTypeCodeModule } from './unit-type-code/unit-type-code.module';
@Module({
  imports: [
    RouterModule.forRoutes(routes),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig, appConfig],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    UnitTypeCodeModule,
  ],
})
export class AppModule {}
