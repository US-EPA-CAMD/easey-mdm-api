import {
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';

import { ProgramDTO } from '../dto/program.dto';
import { ProgramMap } from '../maps/program.map';
import { ProgramRepository } from './program.repository';
import { ProgramParamsDTO } from '../dto/program.params.dto';

@Injectable()
export class ProgramService {
  constructor(
    @InjectRepository(ProgramRepository)
    private readonly repository: ProgramRepository,
    private readonly map: ProgramMap,
  ) {}

  async getProgramCodes(params: ProgramParamsDTO): Promise<ProgramDTO[]> {
    try {
      const results = await this.repository.getProgramCodes(params);
      return this.map.many(results);
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
