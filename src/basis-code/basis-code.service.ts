import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BasisCodeDTO } from '../dto/basis-code.dto';
import { BasisCodeRepository } from './basis-code.repository';

@Injectable()
export class BasisCodeService {
  constructor(
    @InjectRepository(BasisCodeRepository)
    private readonly repository: BasisCodeRepository,
  ) {}

  async getBasisCodes(): Promise<BasisCodeDTO[]> {
    return this.repository.getBasisCodes();
  }
}
