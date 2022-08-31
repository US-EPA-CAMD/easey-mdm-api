import { QualDataTypeCode } from '../entities/qual-data-type-code.entity';
import { QualDataTypeCodeMap } from './qual-data-type-code.map';

const qualDataTypeCode = '';
const qualDataTypeCodeDescription = '';

const entity = new QualDataTypeCode();
entity.qualDataTypeCode = qualDataTypeCode;
entity.qualDataTypeCodeDescription = qualDataTypeCodeDescription;

describe('QualDataTypeCodeMap', () => {
  it('maps an entity to a dto', async () => {
    const map = new QualDataTypeCodeMap();
    const result = await map.one(entity);
    expect(result.qualDataTypeCode).toEqual(qualDataTypeCode);
    expect(result.qualDataTypeCodeDescription).toEqual(
      qualDataTypeCodeDescription,
    );
  });
});
