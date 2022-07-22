import { Test, TestingModule } from '@nestjs/testing';
import { TestTypeGroupCodeDTO } from '../dto/test-type-group-code.dto';
import { TestTypeGroupCodeRepository } from './test-type-group-code.repository';
import { TestTypeGroupCodesService } from './test-type-group-codes.service';

const testTypeGroupCodeDTO = new TestTypeGroupCodeDTO();
const mockRepository = () => ({
  getTestTypeGroupCodes: jest.fn().mockResolvedValue([testTypeGroupCodeDTO]),
});

describe('TestTypeGroupCodesService', () => {
  let service: TestTypeGroupCodesService;
  let repository: TestTypeGroupCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TestTypeGroupCodesService,
        {
          provide: TestTypeGroupCodeRepository,
          useFactory: mockRepository,
        },
      ],
    }).compile();

    service = module.get<TestTypeGroupCodesService>(TestTypeGroupCodesService);
    repository = module.get<TestTypeGroupCodeRepository>(
      TestTypeGroupCodeRepository,
    );
  });

  describe('getTestTypeGroupCodes', () => {
    it('calls the TestTypeGroupCodeRepository and return test type group codes', async () => {
      const result = await service.getTestTypeGroupCodes();
      expect(result).toEqual([testTypeGroupCodeDTO]);
      expect(repository.getTestTypeGroupCodes).toHaveBeenCalled();
    });

    it('calls the TestTypeGroupCodeRepository and return test type group codes', async () => {
      jest.spyOn(repository, 'getTestTypeGroupCodes').mockRejectedValue(null);

      let errored = false;

      try {
        await service.getTestTypeGroupCodes();
      } catch (e) {
        errored = true;
      }

      expect(errored).toEqual(true);
      expect(repository.getTestTypeGroupCodes).toHaveBeenCalled();
    });
  });
});
