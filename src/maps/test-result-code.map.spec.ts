import { TestResultCode } from '../entities/test-result-code.entity';
import { TestResultCodeMap } from './test-result-code.map';

const testResultCode = '';
const testResultCodeDescription = '';

const entity = new TestResultCode();
entity.testResultCode = testResultCode;
entity.testResultCodeDescription = testResultCodeDescription;

describe('TestResultCode', () => {
  it('maps and entity to a dto', async () => {
    const map = new TestResultCodeMap();
    const result = await map.one(entity);

    expect(result.testResultCode).toEqual(testResultCode);
    expect(result.testResultCodeDescription).toEqual(testResultCodeDescription);
  });
});
