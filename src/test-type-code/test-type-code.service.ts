import { Injectable } from '@nestjs/common';
import { TestTypeCodeDTO } from '../dto/test-type-code.dto';
import { TestTypeCodeRepository } from './test-type-code.repository';

@Injectable()
export class TestTypeCodeService {
  constructor(private readonly repository: TestTypeCodeRepository) {}

  async getTestTypeCodes(): Promise<TestTypeCodeDTO[]> {
    return await this.repository.getTestTypeCodes();
  }
}
