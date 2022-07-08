import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestResultCodeDTO } from '../dto/test-result-code.dto';
import { TestResultCodeRepository } from './test-result-code.repository';

@Injectable()
export class TestResultCodeService {
  constructor(
    @InjectRepository(TestResultCodeRepository)
    private readonly repository: TestResultCodeRepository,
  ) {}

  async getTestResultCodes(): Promise<TestResultCodeDTO[]> {
    return this.repository.find();
  }
}
