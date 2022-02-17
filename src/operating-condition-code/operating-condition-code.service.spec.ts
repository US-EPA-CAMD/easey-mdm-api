import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { OperatingConditionCodeRepository } from './operating-condition-code.repository';
import { OperatingConditionCodeService } from './operating-condition-code.service';

const mockOperatingConditionCodeRepository = () => ({
  getOperatingConditionCodes: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('OperatingConditionCodeService', () => {
  let service: OperatingConditionCodeService;
  let repository: OperatingConditionCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        OperatingConditionCodeService,
        {
          provide: OperatingConditionCodeRepository,
          useFactory: mockOperatingConditionCodeRepository,
        },
      ],
    }).compile();

    service = module.get<OperatingConditionCodeService>(
      OperatingConditionCodeService,
    );
    repository = module.get<OperatingConditionCodeRepository>(
      OperatingConditionCodeRepository,
    );
  });

  describe('getOperatingConditionCodes', () => {
    it('calls the OperatingConditionCodeRepository and returns span scale codes', async () => {
      const result = await service.getOperatingConditionCodes();
      expect(result).toEqual([]);
      expect(repository.getOperatingConditionCodes).toHaveBeenCalled();
    });
  });
});
