import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EquationCodeDTO } from '../dto/equation-code.dto';
import { EquationCodeRepository } from './equation-code.repository';

@Injectable()
export class EquationCodeService {
  constructor(
    @InjectRepository(EquationCodeRepository)
    private readonly repository: EquationCodeRepository,
  ) {}

  async getEquationCodes(): Promise<EquationCodeDTO[]> {
    return this.repository.getEquationCodes();
  }
}
