import { Test, TestingModule } from '@nestjs/testing';
import { WafMethodCodeService } from './waf-method-code.service';
import { WafMethodCodeRepository } from './waf-method-code.repository';

const mockWafMethodCodeRepository = () => ({
  getWafMethodCodes: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('WafMethodCodeService', () => {
  let service: WafMethodCodeService;
  let repository: WafMethodCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WafMethodCodeService,
        {
          provide: WafMethodCodeRepository,
          useFactory: mockWafMethodCodeRepository,
        },
      ],
    }).compile();

    service = module.get<WafMethodCodeService>(WafMethodCodeService);
    repository = module.get<WafMethodCodeRepository>(WafMethodCodeRepository);
  });

  describe('getWafMethodCodes', () => {
    it('calls the WafMethodCodeRepository and return WAF method codes', async () => {
      const result = await service.getWafMethodCodes();
      expect(result).toEqual([]);
      expect(repository.getWafMethodCodes).toHaveBeenCalled();
    });
  });
});
