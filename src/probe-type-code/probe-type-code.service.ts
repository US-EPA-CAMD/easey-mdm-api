import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProbeTypeCodeRepository } from './probe-type-code.repository';
import { ProbeTypeCodeDTO } from '../dto/probe-type-code.dto';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class ProbeTypeCodeService {
  constructor(
    @InjectRepository(ProbeTypeCodeRepository)
    private readonly repository: ProbeTypeCodeRepository,
  ) {}

  async getProbeTypeCodes(): Promise<ProbeTypeCodeDTO[]> {
    let query;
    try {
      query = await this.repository.getProbeTypeCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return query;
  }
}