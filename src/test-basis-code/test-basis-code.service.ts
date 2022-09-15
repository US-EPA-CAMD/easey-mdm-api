import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { TestBasisCodeDTO } from 'src/dto/test-basis-code.dto';
import { TestBasisCodeRepository } from './test-basis-code.repository';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class TestBasisCodeService {
  constructor(
    @InjectRepository(TestBasisCodeRepository)
    private readonly repository: TestBasisCodeRepository,
  ) {}

  async getTestBasisCodes(): Promise<TestBasisCodeDTO[]> {
    let query;
    try {
      query = await this.repository.getTestBasisCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return query;
  }
}
