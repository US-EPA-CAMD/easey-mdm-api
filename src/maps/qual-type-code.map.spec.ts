import { QualTypeCode } from '../entities/qual-type-code.entity';
import { QualTypeCodeMap } from './qual-type-code.map';

const qualTypeCode = '';
const qualTypeCodeDescription = '';

const entity = new QualTypeCode();
entity.qualTypeCode = qualTypeCode;
entity.qualTypeCodeDescription = qualTypeCodeDescription;

describe('QualTypeCodeMap', () => {
  it('maps an entity to a dto', async () => {
    const map = new QualTypeCodeMap();
    const result = await map.one(entity);
    expect(result.qualTypeCode).toEqual(qualTypeCode);
    expect(result.qualTypeCodeDescription).toEqual(qualTypeCodeDescription);
  });
});
