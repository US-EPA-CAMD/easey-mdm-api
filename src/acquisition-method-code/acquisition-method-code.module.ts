import { Module } from '@nestjs/common';
import { AcquisitionMethodCodeService } from './acquisition-method-code.service';
import { AcquisitionMethodCodeController } from './acquisition-method-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcquisitionMethodCodeRepository } from './acquisition-method-code.repository';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([AcquisitionMethodCodeRepository]),
    HttpModule,
  ],
  controllers: [AcquisitionMethodCodeController],
  providers: [AcquisitionMethodCodeService, ConfigService],
})
export class AcquisitionMethodCodeModule {}
