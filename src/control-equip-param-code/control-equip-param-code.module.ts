import { Module } from '@nestjs/common';
import { ControlEquipParamCodeService } from './control-equip-param-code.service';
import { ControlEquipParamCodeController } from './control-equip-param-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControlEquipParamCodeRepository } from './control-equip-param-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ControlEquipParamCodeRepository])],
  controllers: [ControlEquipParamCodeController],
  providers: [ControlEquipParamCodeService],
})
export class ControlEquipParamCodeModule {}
