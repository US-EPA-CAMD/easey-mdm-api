import { Module } from '@nestjs/common';
import { MethodCodeService } from './method-code.service';
import { MethodCodeController } from './method-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MethodCodeRepository } from './method-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MethodCodeRepository])],
  controllers: [MethodCodeController],
  providers: [MethodCodeService],
})
export class MethodCodeModule {}
