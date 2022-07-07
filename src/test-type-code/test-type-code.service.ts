import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestTypeCodeDTO } from '../dto/test-type-code.dto';
import { TestTypeCodeRepository } from './test-type-code.repository';

@Injectable()
export class TestTypeCodeService {
  constructor(
    @InjectRepository(TestTypeCodeRepository)
    private readonly repository: TestTypeCodeRepository,
  ) {}

  async getTestTypeCodes(): Promise<TestTypeCodeDTO[]> {
    return this.repository.getTestTypeCodes();
  }
}
