import { GasTypeCode } from '../entities/gas-type-code.entity';
import { GasTypeCodeMap } from './gas-type-code.map';

const gasTypeCode = '';
const gasTypeDescription = '';

const entity = new GasTypeCode();
entity.gasTypeCode = gasTypeCode;
entity.gasTypeDescription = gasTypeDescription;

describe('GasTypeCodeMap', () => {
  it('maps an entity to a dto', async () => {
    const map = new GasTypeCodeMap();
    const result = await map.one(entity);
    expect(result.gasTypeCode).toEqual(gasTypeCode);
    expect(result.gasTypeCodeDescription).toEqual(gasTypeDescription);
  });
});
