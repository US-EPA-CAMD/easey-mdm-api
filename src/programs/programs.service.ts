import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ProgramRepository } from './program-code.repository';
import { ProgramMap } from '../maps/program.map';
import { ProgramDTO } from '../dto/program.dto';
import { ProgramParamsDTO } from '../dto/program.params.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';

@Injectable()
export class ProgramsService {
  constructor(
    @InjectRepository(ProgramRepository)
    private readonly repository: ProgramRepository,
    private readonly map: ProgramMap,
    private readonly logger: Logger,
  ) {}

  async getAllPrograms(
    programParamsDTO: ProgramParamsDTO,
  ): Promise<ProgramDTO[]> {
    this.logger.info('Getting all programs');
    let query;
    try {
      query = await this.repository.getAllPrograms(programParamsDTO);
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Getting all programs');

    return this.map.many(query);
  }
}
