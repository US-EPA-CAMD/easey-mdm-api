import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemMethodCodeService } from './dem-method-code.service';
import { DemMethodCodeController } from './dem-method-code.controller';
import { DemMethodCodeRepository } from './dem-method-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DemMethodCodeRepository])],
  controllers: [DemMethodCodeController],
  providers: [DemMethodCodeService],
})
export class DemMethodCodeModule {}
