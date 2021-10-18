import { Injectable } from '@nestjs/common';
import { DemMethodCodeDTO } from '../dto/dem-method-code.dto';
import { DemMethodCodeRepository } from './dem-method-code.repository';

@Injectable()
export class DemMethodCodeService {
  constructor(private readonly repository: DemMethodCodeRepository) {}

  async getDemMethodCodes(): Promise<DemMethodCodeDTO[]> {
    return this.repository.getDemMethodCodes();
  }
}
