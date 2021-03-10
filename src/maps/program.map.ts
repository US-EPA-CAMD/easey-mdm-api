import { Injectable } from '@nestjs/common';

import { BaseMap } from './base.map';
import { Program } from '../entities/program-code.entity';
import { ProgramDTO } from '../dto/program.dto';

@Injectable()
export class ProgramMap extends BaseMap<Program, ProgramDTO> {
  public async one(entity: Program): Promise<ProgramDTO> {
    return {
      programCode: entity.programCode,
      programDescription: entity.programDescription,
      compParameterCode: entity.compParameterCode,
      programGroupCode: entity.programGroupCode,
    };
  }
}
