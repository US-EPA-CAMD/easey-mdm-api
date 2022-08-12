import { ApsCode } from '../entities/aps-code.entity';
import { ApsCodeMap } from './aps-code.map';

const apsCode = '';
const apsCodeDescription = '';

const entity = new ApsCode();
entity.apsCode = apsCode;
entity.apsCodeDescription = apsCodeDescription;

describe('ApsCode', () => {
  it('maps and entity to a dto', async () => {
    const map = new ApsCodeMap();
    const result = await map.one(entity);

    expect(result.apsCode).toEqual(apsCode);
    expect(result.apsCodeDescription).toEqual(apsCodeDescription);
  });
});
