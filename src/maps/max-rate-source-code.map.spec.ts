import { MaxRateSourceCode } from '../entities/max-rate-source-code.entity';
import { MaxRateSourceCodeMap } from './max-rate-source-code.map';

const maxRateSourceCode = '';
const maxRateSourceCodeDescription = '';

const entity = new MaxRateSourceCode();
entity.maxRateSourceCode = maxRateSourceCode;
entity.maxRateSourceCodeDescription = maxRateSourceCodeDescription;

describe('MaxRateSourceCodeMap', () => {
  it('maps an entity to a dto', async () => {
    const map = new MaxRateSourceCodeMap();
    const result = await map.one(entity);
    expect(result.maxRateSourceCode).toEqual(maxRateSourceCode);
    expect(result.maxRateSourceCodeDescription).toEqual(
      maxRateSourceCodeDescription,
    );
  });
});
