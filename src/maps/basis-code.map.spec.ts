import { BasisCode } from '../entities/basis-code.entity';
import { BasisCodeMap } from './basis-code.map';

const basisCode = '';
const basisCodeDescription = '';
const basisCategory = '';

const entity = new BasisCode();
entity.basisCode = basisCode;
entity.basisCodeDescription = basisCodeDescription;
entity.basisCategory = basisCategory;

describe('GasTypeCodeMap', () => {
  it('maps an entity to a dto', async () => {
    const map = new BasisCodeMap();
    const result = await map.one(entity);
    expect(result.basisCode).toEqual(basisCode);
    expect(result.basisCodeDescription).toEqual(basisCodeDescription);
    expect(result.basisCategory).toEqual(basisCategory);
  });
});
