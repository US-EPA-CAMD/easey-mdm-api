import { Test, TestingModule } from '@nestjs/testing';
import { ProbeTypeCodeService } from './probe-type-code.service';
import { ProbeTypeCodeRepository } from './probe-type-code.repository';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

const mockProbeTypeCodeRepository = () => ({
  getProbeTypeCodes: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('ProbeTypeCodeService', () => {
  let service: ProbeTypeCodeService;
  let repository: ProbeTypeCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        ProbeTypeCodeService,
        {
          provide: ProbeTypeCodeRepository,
          useFactory: mockProbeTypeCodeRepository,
        },
      ],
    }).compile();

    service = module.get<ProbeTypeCodeService>(ProbeTypeCodeService);
    repository = module.get<ProbeTypeCodeRepository>(ProbeTypeCodeRepository);
  });

  describe('getProbeTypeCodes', () => {
    it('calls the ProbeTypeCodeRepository and returns probe type codes', async () => {
      const result = await service.getProbeTypeCodes();
      expect(result).toEqual([]);
      expect(repository.getProbeTypeCodes).toHaveBeenCalled();
    });
  });
});
