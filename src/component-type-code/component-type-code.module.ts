import { Module } from '@nestjs/common';
import { ComponentTypeCodeService } from './component-type-code.service';
import { ComponentTypeCodeController } from './component-type-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComponentTypeCodeRepository } from './component-type-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ComponentTypeCodeRepository])],
  controllers: [ComponentTypeCodeController],
  providers: [ComponentTypeCodeService],
})
export class ComponentTypeCodeModule {}
