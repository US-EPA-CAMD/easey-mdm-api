import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MaterialCodeDTO } from '../dto/material-code.dto';
import { MaterialCodeRepository } from './material-code.repository';

@Injectable()
export class MaterialCodeService {
  constructor(
    @InjectRepository(MaterialCodeRepository)
    private readonly repository: MaterialCodeRepository,
  ) {}

  async getMaterialCodes(): Promise<MaterialCodeDTO[]> {
    return await this.repository.getMaterialCodes();
  }
}
