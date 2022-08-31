import { Test, TestingModule } from '@nestjs/testing';
import { BypassApproachCodeService } from './bypass-approach-code.service';
import { BypassApproachCodeRepository } from './bypass-approach-code.repository';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

const mockBypassApproachCodeRepository = () => ({
  getBypassApproachCodes: jest.fn(),
});

describe('BypassApproachCodeService', () => {
  let bypassApproachCodeService: BypassApproachCodeService;
  let bypassApproachCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        BypassApproachCodeService,
        {
          provide: BypassApproachCodeRepository,
          useFactory: mockBypassApproachCodeRepository,
        },
      ],
    }).compile();

    bypassApproachCodeService = module.get<BypassApproachCodeService>(
      BypassApproachCodeService,
    );
    bypassApproachCodeRepository = module.get<BypassApproachCodeRepository>(
      BypassApproachCodeRepository,
    );
  });

  describe('getBypassApproachCodes', () => {
    it('calls BypassApproachCodeRepository.getBypassApproachCodes and returns the result', async () => {
      bypassApproachCodeRepository.getBypassApproachCodes.mockResolvedValue(
        'someValue',
      );
      const result = await bypassApproachCodeService.getBypassApproachCodes();
      expect(result).toEqual('someValue');
    });
  });
});
