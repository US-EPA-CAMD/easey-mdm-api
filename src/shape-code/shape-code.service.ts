import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ShapeCodeDTO } from '../dto/shape-code.dto';
import { ShapeCodeRepository } from './shape-code.repository';

@Injectable()
export class ShapeCodeService {
  constructor(
    @InjectRepository(ShapeCodeRepository)
    private readonly repository: ShapeCodeRepository,
  ) {}

  async getShapeCodes(): Promise<ShapeCodeDTO[]> {
    return await this.repository.getShapeCodes();
  }
}
