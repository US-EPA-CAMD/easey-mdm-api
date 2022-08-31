import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquationCodeService } from './equation-code.service';
import { EquationCodeController } from './equation-code.controller';
import { EquationCodeRepository } from './equation-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EquationCodeRepository])],
  controllers: [EquationCodeController],
  providers: [EquationCodeService],
})
export class EquationCodeModule {}
