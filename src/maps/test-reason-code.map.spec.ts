import { TestReasonCode } from '../entities/test-reason-code.entity';
import { TestReasonCodeMap } from './test-reason-code.map';

const testReasonCode = 'INITIAL';
const testReasonCodeDescription = 'Initial Certification';

const entity = new TestReasonCode();
entity.testReasonCode = testReasonCode;
entity.testReasonCodeDescription = testReasonCodeDescription;

describe('TestReasonCodeMap', () => {
  it('maps an entity to a dto', async () => {
    const map = new TestReasonCodeMap();
    const result = await map.one(entity);

    expect(result.testReasonCode).toEqual(testReasonCode);
    expect(result.testReasonCodeDescription).toEqual(testReasonCodeDescription);
  });
});
