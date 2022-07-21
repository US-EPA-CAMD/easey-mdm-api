import { TestTypeGroupCode } from '../entities/test-type-group-code.entity';
import { TestTypeGroupCodeMap } from './test-type-group-code.map';

const testTypeGroupCode = '';
const testTypeGroupCodeDescription = '';

const entity = new TestTypeGroupCode();
entity.testTypeGroupCode = testTypeGroupCode;
entity.testTypeGroupCodeDescription = testTypeGroupCodeDescription;

describe('TestTypeGroupCodeMap', () => {
  it('maps an entity to a dto', async () => {
    const map = new TestTypeGroupCodeMap();
    const result = await map.one(entity);
    expect(result.testTypeGroupCode).toEqual(testTypeGroupCode);
    expect(result.testTypeGroupCodeDescription).toEqual(
      testTypeGroupCodeDescription,
    );
  });
});
