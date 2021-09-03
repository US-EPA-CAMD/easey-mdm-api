import { Injectable } from '@nestjs/common';
import { BaseMap } from './base.map';
import { SystemDesignationCode } from '../entities/system-designation-code.entity';
import { SystemDesignationCodeDTO } from '../dto/system-designation-code.dto';

@Injectable()
export class SystemDesignationCodeMap extends BaseMap<
  SystemDesignationCode,
  SystemDesignationCodeDTO
> {
  public async one(
    entity: SystemDesignationCode,
  ): Promise<SystemDesignationCodeDTO> {
    return {
      systemDesignationCode: entity.systemDesignationCode,
      systemDesignationCodeDescription: entity.systemDesignationCodeDescription,
    };
  }
}
