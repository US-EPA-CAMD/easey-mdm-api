import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ComponentTypeCodeService } from './component-type-code.service';
import { ComponentTypeCodeDTO } from '../dto/component-type-code.dto';

@ApiTags('Component Type Codes')
@Controller()
export class ComponentTypeCodeController {
  constructor(private readonly service: ComponentTypeCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: ComponentTypeCodeDTO,
    description: 'Retrieves all component type codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getComponentTypeCodes(): Promise<ComponentTypeCodeDTO[]> {
    return this.service.getComponentTypeCodes();
  }
}
