import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReferenceMethodCodeService } from './reference-method-code.service';
import { ReferenceMethodCodeController } from './reference-method-code.controller';
import { ReferenceMethodCodeRepository } from './reference-method-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ReferenceMethodCodeRepository])],
  controllers: [ReferenceMethodCodeController],
  providers: [ReferenceMethodCodeService],
})
export class ReferenceMethodCodeModule {}
