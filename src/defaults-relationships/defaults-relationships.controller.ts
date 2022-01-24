import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { DefaultsRelationshipsDTO } from '../dto/defaults-relationships.dto';
import { DefaultsRelationshipsService } from './defaults-relationships.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Defaults Relationships')
export class DefaultsRelationshipsController {
  constructor(private readonly service: DefaultsRelationshipsService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: DefaultsRelationshipsDTO,
    description: 'Retrieves default master data relationships.',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getDefaultsRelationships(): Promise<DefaultsRelationshipsDTO[]> {
    return this.service.getDefaultsRelationships();
  }
}
