import { Test, TestingModule } from '@nestjs/testing';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { TestReasonCodeRepository } from './test-reason-code.repository';
import { TestReasonCodeService } from './test-reason-code.service';

const mockTestReasonCodeRepository = () => ({
  getTestReasonCodes: jest.fn(() => []),
});

describe('TestReasonCodeService', () => {
  let service: TestReasonCodeService;
  let repository: TestReasonCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        Logger,
        TestReasonCodeService,
        {
          provide: TestReasonCodeRepository,
          useFactory: mockTestReasonCodeRepository,
        },
      ],
    }).compile();

    service = module.get<TestReasonCodeService>(TestReasonCodeService);
    repository = module.get<TestReasonCodeRepository>(TestReasonCodeRepository);
  });

  describe('getTestReasonCodes', () => {
    it('should call the TestReasonCodeRepository.getTestReasonCodes() and return a list of test reason codes', async () => {
      expect(service).toBeDefined();
      const result = await service.getTestReasonCodes();
      expect(result).toEqual([]);
      expect(repository.getTestReasonCodes).toHaveBeenCalled();
    });
  });
});
