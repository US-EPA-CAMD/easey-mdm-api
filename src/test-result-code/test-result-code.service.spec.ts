import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { TestResultCodeRepository } from './test-result-code.repository';
import { TestResultCodeService } from './test-result-code.service';

const mockTestResultCodeRepository = () => ({
  find: jest.fn(() => []),
});

describe('TestResultCodeService', () => {
  let service: TestResultCodeService;
  let repository: TestResultCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        TestResultCodeService,
        {
          provide: TestResultCodeRepository,
          useFactory: mockTestResultCodeRepository,
        },
      ],
    }).compile();

    service = module.get<TestResultCodeService>(TestResultCodeService);
    repository = module.get<TestResultCodeRepository>(TestResultCodeRepository);
  });

  describe('getTestResultCodes', () => {
    it('calls the TestResultCodeRepository and returns test-result-codes', async () => {
      const result = await service.getTestResultCodes();
      expect(result).toEqual([]);
      expect(repository.find).toHaveBeenCalled();
    });
  });
});
