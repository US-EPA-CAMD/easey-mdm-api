import { QualLeeTestTypeCode } from '../entities/qual-lee-test-type-code.entity';
import { QualLeeTestTypeCodeMap } from './qual-lee-test-type-code.map';

const qualLeeTestTypeCode = '';
const qualLeeTestTypeDescription = '';

const entity = new QualLeeTestTypeCode();
entity.qualLeeTestTypeCode = qualLeeTestTypeCode;
entity.qualLeeTestTypeDescription = qualLeeTestTypeDescription;

describe('QualLeeTestTypeCodeMap', () => {
  it('maps an entity to a dto', async () => {
    const map = new QualLeeTestTypeCodeMap();
    const result = await map.one(entity);
    expect(result.qualLeeTestTypeCode).toEqual(qualLeeTestTypeCode);
    expect(result.qualLeeTestTypeDescription).toEqual(
      qualLeeTestTypeDescription,
    );
  });
});
