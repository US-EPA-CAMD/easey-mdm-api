import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShapeCodeService } from './shape-code.service';
import { ShapeCodeController } from './shape-code.controller';
import { ShapeCodeRepository } from './shape-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ShapeCodeRepository])],
  controllers: [ShapeCodeController],
  providers: [ShapeCodeService],
})
export class ShapeCodeModule {}
