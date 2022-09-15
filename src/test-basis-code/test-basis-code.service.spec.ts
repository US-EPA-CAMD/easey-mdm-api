import { Test, TestingModule } from '@nestjs/testing';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { TestBasisCodeRepository } from './test-basis-code.repository';
import { TestBasisCodeService } from './test-basis-code.service';

const mockTestBasisCodeRepository = () => ({
  getTestBasisCodes: jest.fn(() => []),
});

describe('TestBasisCodeService', () => {
  let service: TestBasisCodeService;
  let repository: TestBasisCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        Logger,
        TestBasisCodeService,
        {
          provide: TestBasisCodeRepository,
          useFactory: mockTestBasisCodeRepository,
        },
      ],
    }).compile();

    service = module.get<TestBasisCodeService>(TestBasisCodeService);
    repository = module.get<TestBasisCodeRepository>(TestBasisCodeRepository);
  });

  describe('getTestBasisCodes', () => {
    it('should call the TestBasisCodeRepository.getTestBasisCodes() and return a list of test basis codes', async () => {
      expect(service).toBeDefined();
      const result = await service.getTestBasisCodes();
      expect(result).toEqual([]);
      expect(repository.getTestBasisCodes).toHaveBeenCalled();
    });
  });
});
