import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DefaultPurposeCodeDTO } from 'src/dto/default-purpose-code.dto';
import { DefaultPurposeCodeRepository } from './default-purpose-code.repository';

@Injectable()
export class DefaultPurposeCodeService {
  constructor(
    @InjectRepository(DefaultPurposeCodeRepository)
    private readonly repository: DefaultPurposeCodeRepository,
  ) {}

  async getDefaultPurposeCodes(): Promise<DefaultPurposeCodeDTO[]> {
    return this.repository.getDefaultPurposeCodes();
  }
}
