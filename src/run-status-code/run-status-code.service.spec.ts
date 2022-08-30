import { Test, TestingModule } from '@nestjs/testing';
import { RunStatusCode } from '../entities/run-status-code.entity';
import { RunStatusCodeRepository } from './run-status-code.repository';
import { RunStatusCodeService } from './run-status-code.service';

const runStatus = new RunStatusCode();

describe('RunStatusCodeService', () => {
  let service: RunStatusCodeService;
  let repository: RunStatusCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RunStatusCodeService,
        {
          provide: RunStatusCodeRepository,
          useFactory: () => ({
            find: jest.fn().mockResolvedValue([runStatus]),
          }),
        },
      ],
    }).compile();

    service = module.get<RunStatusCodeService>(RunStatusCodeService);
    repository = module.get<RunStatusCodeRepository>(
      RunStatusCodeRepository,
    );
  });

  describe('getRunStatusCodes', () => {
    it('calls the getRunStatusCodes and returns run-status-codes', async () => {
      const result = await service.getRunStatusCodes();
      expect(result).toEqual([runStatus]);
      expect(repository.find).toHaveBeenCalled();
    });
  });
});
