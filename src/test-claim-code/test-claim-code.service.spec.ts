import { Test, TestingModule } from '@nestjs/testing';
import { TestClaimCodeService } from './test-claim-code.service';
import { TestClaimCodeRepository } from './test-claim-code.repository';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

const mockTestClaimCodeRepository = () => ({
  getTestClaimCodes: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('TestClaimCodeService', () => {
  let service: TestClaimCodeService;
  let repository: TestClaimCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        TestClaimCodeService,
        {
          provide: TestClaimCodeRepository,
          useFactory: mockTestClaimCodeRepository,
        },
      ],
    }).compile();

    service = module.get<TestClaimCodeService>(TestClaimCodeService);
    repository = module.get<TestClaimCodeRepository>(TestClaimCodeRepository);
  });

  describe('getTestClaimCodes', () => {
    it('calls the TestClaimCodeRepository and returns probe type codes', async () => {
      const result = await service.getTestClaimCodes();
      expect(result).toEqual([]);
      expect(repository.getTestClaimCodes).toHaveBeenCalled();
    });
  });
});