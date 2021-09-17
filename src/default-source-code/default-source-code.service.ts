import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DefaultSourceCodeDTO } from '../dto/default-source-code.dto';
import { DefaultSourceCodeRepository } from './default-source-code.repository';

@Injectable()
export class DefaultSourceCodeService {
  constructor(
    @InjectRepository(DefaultSourceCodeRepository)
    private readonly repository: DefaultSourceCodeRepository,
  ) {}

  async getDefaultSourceCodes(): Promise<DefaultSourceCodeDTO[]> {
    return this.repository.getDefaultSourceCodes();
  }
}
