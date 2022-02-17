import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComponentTypeCodeRepository } from './component-type-code.repository';
import { ComponentTypeCodeDTO } from '../dto/component-type-code.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';

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
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got component type codes');
    return query;
  }
}
