import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { MatsMethodParamCodeRepository } from './mats-method-param-code.repository';
import { MatsMethodParamCodeService } from './mats-method-param-code.service';

const mockMatsMethodParamCodeRepository = () => ({
  getMatsMethodParamCodes: jest.fn(() => []),
});

describe('MatsMethodParamCodeService', () => {
  let service: MatsMethodParamCodeService;
  let repository: MatsMethodParamCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        MatsMethodParamCodeService,
        {
          provide: MatsMethodParamCodeRepository,
          useFactory: mockMatsMethodParamCodeRepository,
        },
      ],
    }).compile();

    service = module.get<MatsMethodParamCodeService>(
      MatsMethodParamCodeService,
    );
    repository = module.get<MatsMethodParamCodeRepository>(
      MatsMethodParamCodeRepository,
    );
  });

  describe('getMatsMethodParamCodes', () => {
    it('should call the MatsMethodParamCodeRepository.getMatsMethodParamCodes() and return a list of mats method param codes', async () => {
      expect(service).toBeDefined();
      const result = await service.getMatsMethodParamCodes();
      expect(result).toEqual([]);
      expect(repository.getMatsMethodParamCodes).toHaveBeenCalled();
    });
  });
});
