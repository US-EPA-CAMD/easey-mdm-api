import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from 'nest-router';

import { TypeOrmConfigService } from './config/typeorm.config';
import dbConfig from './config/db.config';
import appConfig from './config/app.config';
import routes from './routes';
import { UnitTypesModule } from './unit-types/unit-types.module';
import { ControlTechnologiesModule } from './control-technologies/control-technologies.module';
import { FuelTypesModule } from './fuel-types/fuel-types.module';
import { ProgramsModule } from './programs/programs.module';
import { AccountTypesModule } from './account-types/account-types.module';
import { StatesModule } from './states/states.module';
import { BypassApproachCodeModule } from './bypass-approach-code/bypass-approach-code.module';
import { SubDataCodeModule } from './sub-data-code/sub-data-code.module';
import { ParameterCodeModule } from './parameter-code/parameter-code.module';
import { MethodCodeModule } from './method-code/method-code.module';

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
    ControlTechnologiesModule,
    FuelTypesModule,
    UnitTypesModule,
    ProgramsModule,
    AccountTypesModule,
    StatesModule,
    BypassApproachCodeModule,
    SubDataCodeModule,
    ParameterCodeModule,
    MethodCodeModule,
  ],
})
export class AppModule {}
