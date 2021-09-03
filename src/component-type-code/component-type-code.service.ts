import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComponentTypeCodeRepository } from './component-type-code.repository';
import { ComponentTypeCodeDTO } from '../dto/component-type-code.dto';

@Injectable()
export class ComponentTypeCodeService {
  constructor(
    @InjectRepository(ComponentTypeCodeRepository)
    private readonly repository: ComponentTypeCodeRepository,
  ) {}

  async getComponentTypeCodes(): Promise<ComponentTypeCodeDTO[]> {
    return await this.repository.getComponentTypeCodes();
  }
}
