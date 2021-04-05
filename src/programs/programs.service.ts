import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ProgramRepository } from './program-code.repository';
import { ProgramMap } from '../maps/program.map';
import { ProgramDTO } from '../dto/program.dto';
import { ProgramParamsDTO } from '../dto/program.params.dto';

@Injectable()
export class ProgramsService {
  constructor(
    @InjectRepository(ProgramRepository)
    private repository: ProgramRepository,
    private map: ProgramMap,
  ) {}

  async getAllPrograms(
    programParamsDTO: ProgramParamsDTO,
  ): Promise<ProgramDTO[]> {
    const query = await this.repository.getAllPrograms(programParamsDTO);
    return this.map.many(query);
  }
}
