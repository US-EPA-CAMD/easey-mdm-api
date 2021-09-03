import { Module } from '@nestjs/common';
import { AcquisitionMethodCodeService } from './acquisition-method-code.service';
import { AcquisitionMethodCodeController } from './acquisition-method-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcquisitionMethodCodeRepository } from './acquisition-method-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AcquisitionMethodCodeRepository])],
  controllers: [AcquisitionMethodCodeController],
  providers: [AcquisitionMethodCodeService],
})
export class AcquisitionMethodCodeModule {}
