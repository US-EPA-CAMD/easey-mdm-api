import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParameterCodeController } from './parameter-code.controller';
import { ParameterCodeService } from './parameter-code.service';
import { ParameterCodeRepository } from './parameter-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ParameterCodeRepository])],
  controllers: [ParameterCodeController],
  providers: [ParameterCodeService],
})
export class ParameterCodeModule {}
