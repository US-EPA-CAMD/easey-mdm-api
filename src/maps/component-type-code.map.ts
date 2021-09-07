import { Injectable } from '@nestjs/common';
import { BaseMap } from './base.map';
import { ComponentTypeCode } from '../entities/component-type-code.entity';
import { ComponentTypeCodeDTO } from '../dto/component-type-code.dto';

@Injectable()
export class ComponentTypeCodeMap extends BaseMap<
  ComponentTypeCode,
  ComponentTypeCodeDTO
> {
  public async one(entity: ComponentTypeCode): Promise<ComponentTypeCodeDTO> {
    return {
      componentTypeCode: entity.componentTypeCode,
      componentTypeCodeDescription: entity.componentTypeCodeDescription,
      spanIndicator: entity.spanIndicator,
      parameterCode: entity.parameterCode,
    };
  }
}
