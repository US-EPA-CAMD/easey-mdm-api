import { Test, TestingModule } from '@nestjs/testing';
import { MatsMethodCodeService } from './mats-method-code.service';
import { MatsMethodCodeRepository } from './mats-method-code.repository';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

const mockMatsMethodCodeRepository = () => ({
  getMatsMethodCodes: jest.fn(() => []),
});

describe('MatsMethodCodeService', () => {
  let service: MatsMethodCodeService;
  let repository: MatsMethodCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        MatsMethodCodeService,
        {
          provide: MatsMethodCodeRepository,
          useFactory: mockMatsMethodCodeRepository,
        },
      ],
    }).compile();

    service = module.get<MatsMethodCodeService>(MatsMethodCodeService);
    repository = module.get<MatsMethodCodeRepository>(MatsMethodCodeRepository);
  });

  describe('getMatsMethodCodes', () => {
    it('should call the MatsMethodCodeRepository.getMatsMethodCodes() and return a list of mats method codes', async () => {
      expect(service).toBeDefined();
      const result = await service.getMatsMethodCodes();
      expect(result).toEqual([]);
      expect(repository.getMatsMethodCodes).toHaveBeenCalled();
    });
  });
});
