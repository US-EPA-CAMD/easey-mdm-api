import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComponentTypeCodeRepository } from './component-type-code.repository';
import { ComponentTypeCodeDTO } from '../dto/component-type-code.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';

@Injectable()
export class ComponentTypeCodeService {
  constructor(
    @InjectRepository(ComponentTypeCodeRepository)
    private readonly repository: ComponentTypeCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getComponentTypeCodes(): Promise<ComponentTypeCodeDTO[]> {
    this.logger.info('Getting component type codes');
    let query;
    try {
      query = await this.repository.getComponentTypeCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got component type codes');
    return query;
  }
}
