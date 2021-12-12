import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { ControlEquipParamCodeDTO } from '../dto/control-equip-param-code.dto';
import { ControlEquipParamCodeService } from './control-equip-param-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Control Equipment Parameter Codes')
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
