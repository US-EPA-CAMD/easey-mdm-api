import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParameterCodeDTO } from '../dto/parameter-code.dto';
import { ParameterCodeRepository } from './parameter-code.repository';

@Injectable()
export class ParameterCodeService {
  constructor(
    @InjectRepository(ParameterCodeRepository)
    private readonly parameterCodeRepository: ParameterCodeRepository,
  ) {}

  async getParameterCodes(): Promise<ParameterCodeDTO[]> {
    const result = await this.parameterCodeRepository.getParameterCodes();

    return result;
  }
}
