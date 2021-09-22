import { Test, TestingModule } from '@nestjs/testing';
import { DefaultPurposeCodeRepository } from './default-purpose-code.repository';
import { DefaultPurposeCodeService } from './default-purpose-code.service';

const mockDefaultPurposeCodeRepository = () => ({
  getDefaultPurposeCodes: jest.fn(() => []),
});

describe('DefaultPurposeCodeService', () => {
  let service: DefaultPurposeCodeService;
  let repository: DefaultPurposeCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DefaultPurposeCodeService,
        {
          provide: DefaultPurposeCodeRepository,
          useFactory: mockDefaultPurposeCodeRepository,
        },
      ],
    }).compile();

    service = module.get<DefaultPurposeCodeService>(DefaultPurposeCodeService);
    repository = module.get<DefaultPurposeCodeRepository>(
      DefaultPurposeCodeRepository,
    );
  });

  describe('getDefaultPurposeCodes', () => {
    it('should call the DefaultPurposeCodeRepository.getDefaultPurposeCodes() and return a list of default purpose codes', async () => {
      const result = await service.getDefaultPurposeCodes();
      expect(result).toEqual([]);
      expect(repository.getDefaultPurposeCodes).toHaveBeenCalled();
    });
  });
});
