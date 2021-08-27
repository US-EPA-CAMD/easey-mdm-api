import { UnitsOfMeasureCode } from '../entities/units-of-measure-code.entity';
import { UnitsOfMeasureCodeMap } from './units-of-measure-code.map';

const unitsOfMeasureCode = '';
const unitsOfMeasureCodeDescription = '';

const entity = new UnitsOfMeasureCode();
entity.unitsOfMeasureCode = unitsOfMeasureCode;
entity.unitsOfMeasureCodeDescription = unitsOfMeasureCodeDescription;

describe('UnitsOfMeasureCodeMap', () => {
  it('maps an entity to a dto', async () => {
    const map = new UnitsOfMeasureCodeMap();
    const result = await map.one(entity);
    expect(result.unitsOfMeasureCode).toEqual(unitsOfMeasureCode);
    expect(result.unitsOfMeasureCodeDescription).toEqual(
      unitsOfMeasureCodeDescription,
    );
  });
});
