import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestTypeGroupCodeDTO } from '../dto/test-type-group-code.dto';
import { TestTypeGroupCodeRepository } from './test-type-group-code.repository';

@Injectable()
export class TestTypeGroupCodesService {
  constructor(
    @InjectRepository(TestTypeGroupCodeRepository)
    private readonly repository: TestTypeGroupCodeRepository,
  ) {}

  async getTestTypeGroupCodes(): Promise<TestTypeGroupCodeDTO[]> {
    return this.repository.getTestTypeGroupCodes();
  }
}
