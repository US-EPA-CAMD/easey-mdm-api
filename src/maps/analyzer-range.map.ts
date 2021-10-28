import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';
import { AnalyzerRangeCode } from '../entities/analyzer-range.entity';
import { AnalyzerRangeCodeDTO } from '../dto/analyzer-range.dto';

@Injectable()
export class AnalyzerRangeCodeMap extends BaseMap<
  AnalyzerRangeCode,
  AnalyzerRangeCodeDTO
> {
  public async one(entity: AnalyzerRangeCode): Promise<AnalyzerRangeCodeDTO> {
    return {
      analyzerRangeCode: entity.analyzerRangeCode,
      analyzerRangeCodeDescription: entity.analyzerRangeCodeDescription,
    };
  }
}
