import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { ComponentTypeCodeService } from './component-type-code.service';
import { ComponentTypeCodeDTO } from '../dto/component-type-code.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Component Type Codes')
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
