import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { SpansRelationshipsDTO } from '../dto/spans-relationships.dto';
import { SpansRelationshipsService } from './spans-relationships.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Spans Relationships')
export class SpansRelationshipsController {
  constructor(private readonly service: SpansRelationshipsService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: SpansRelationshipsDTO,
    description: 'Retrieves span master data relationships.',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getSpansRelationships(): Promise<SpansRelationshipsDTO[]> {
    return this.service.getSpansRelationships();
  }
}
