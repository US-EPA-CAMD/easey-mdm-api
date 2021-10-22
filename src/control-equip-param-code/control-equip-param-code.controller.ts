import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ControlEquipParamCodeDTO } from '../dto/control-equip-param-code.dto';
import { ControlEquipParamCodeService } from './control-equip-param-code.service';

@ApiTags('Control Equipment Parameter Codes')
@Controller()
export class ControlEquipParamCodeController {
  constructor(private readonly service: ControlEquipParamCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: ControlEquipParamCodeDTO,
    description: 'Retrieves all Control Equipment Parameter Codes.',
  })
  async getControlEquipParamCodes(): Promise<ControlEquipParamCodeDTO[]> {
    return this.service.getControlEquipParamCodes();
  }
}
