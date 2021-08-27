import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UnitsOfMeasureCodeRepository } from './units-of-measure-code.repository';
import { UnitsOfMeasureCodeDTO } from '../dto/units-of-measure-code.dto';

@Injectable()
export class UnitsOfMeasureCodeService {
  constructor(
    @InjectRepository(UnitsOfMeasureCodeRepository)
    private readonly repository: UnitsOfMeasureCodeRepository,
  ) {}

  async getUnitsOfMeasureCodes(): Promise<UnitsOfMeasureCodeDTO[]> {
    return this.repository.getUnitsOfMeasureCodes();
  }
}
