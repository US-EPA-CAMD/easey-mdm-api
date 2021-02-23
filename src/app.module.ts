import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from 'nest-router';

import dbConfig from './config/db.config';
import appConfig from './config/app.config';
import { UnitTypesModule } from './unit-types/unit-types.module';
import { TypeOrmConfigService } from './config/typeorm.config';
import { FuelTypesModule } from './fuel-types/fuel-types.module';
import routes from './routes';

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
    UnitTypesModule,
    FuelTypesModule,
  ],
})
export class AppModule {}
