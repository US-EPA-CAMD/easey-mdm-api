import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { DemMethodCodeRepository } from './dem-method-code.repository';
import { DemMethodCodeService } from './dem-method-code.service';

const mockDemMethodCodeRepository = () => ({
  getDemMethodCodes: jest.fn(() => []),
});

describe('DemMethodCodeService', () => {
  let service: DemMethodCodeService;
  let repository: DemMethodCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        DemMethodCodeService,
        {
          provide: DemMethodCodeRepository,
          useFactory: mockDemMethodCodeRepository,
        },
      ],
    }).compile();

    service = module.get<DemMethodCodeService>(DemMethodCodeService);
    repository = module.get<DemMethodCodeRepository>(DemMethodCodeRepository);
  });

  describe('getDemMethodCodes', () => {
    it('should call the DemMethodCodeRepository.getDemMethodCodes() and return a list of demonstration method codes', async () => {
      const result = await service.getDemMethodCodes();
      expect(result).toEqual([]);
      expect(repository.getDemMethodCodes).toHaveBeenCalled();
    });
  });
});
