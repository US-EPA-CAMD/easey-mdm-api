import { Injectable } from '@nestjs/common';
import { ReferenceMethodCodeDTO } from '../dto/reference-method-code.dto';
import { ReferenceMethodCodeRepository } from './reference-method-code.repository';

@Injectable()
export class ReferenceMethodCodeService {
  constructor(private readonly repository: ReferenceMethodCodeRepository) {}

  async getReferenceMethodCodes(): Promise<ReferenceMethodCodeDTO[]> {
    return this.repository.find();
  }
}
