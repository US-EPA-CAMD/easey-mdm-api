import { Module } from '@nestjs/common';
import { ParameterCodeService } from './parameter-code.service';
import { ParameterCodeController } from './parameter-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParameterCodeRepository } from './parameter-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ParameterCodeRepository])],
  controllers: [ParameterCodeController],
  providers: [ParameterCodeService],
})
export class ParameterCodeModule {}
