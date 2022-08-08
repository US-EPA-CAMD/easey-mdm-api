import { RataFrequencyCode } from '../entities/rata-frequency-code.entity';
import { RataFrequencyCodeMap } from './rata-frequency-code.map';

const rataFrequencyCode = '';
const rataFrequencyCodeDescription = '';

const entity = new RataFrequencyCode();
entity.rataFrequencyCode = rataFrequencyCode;
entity.rataFrequencyCodeDescription = rataFrequencyCodeDescription;

describe('RataFrequencyCodeMap', () => {
  it('maps and entity to a dto', async () => {
    const map = new RataFrequencyCodeMap();
    const result = await map.one(entity);

    expect(result.rataFrequencyCode).toEqual(rataFrequencyCode);
    expect(result.rataFrequencyCodeDescription).toEqual(
      rataFrequencyCodeDescription,
    );
  });
});
