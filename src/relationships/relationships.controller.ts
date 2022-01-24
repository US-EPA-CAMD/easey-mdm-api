import { Controller, Get } from '@nestjs/common';
import {
  ApiBadGatewayResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { FormulaRelationshipsDTO } from '../dto/formula-relationships.dto';
import { RelationshipsService } from './relationships.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Relationships')
export class RelationshipsController {
  constructor(private readonly service: RelationshipsService) {}
  @Get('formulas')
  @ApiOkResponse({
    isArray: true,
    type: FormulaRelationshipsDTO,
    description: 'Retrieves all Formula Relationships Data Codes',
  })
  @ApiBadGatewayResponse({
    description: 'Invalid Request',
  })
  getFormulaRelationships() {
    return this.service.getFormulaRelationships();
  }
}
