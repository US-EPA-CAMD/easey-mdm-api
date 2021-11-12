import { Test, TestingModule } from '@nestjs/testing';
import { MaterialCodeService } from './material-code.service';
import { MaterialCodeRepository } from './material-code.repository';

const mockMaterialCodeRepository = () => ({
  getMaterialCodes: jest.fn(() => []),
});

describe('MaterialCodeService', () => {
  let service: MaterialCodeService;
  let repository: MaterialCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MaterialCodeService,
        {
          provide: MaterialCodeRepository,
          useFactory: mockMaterialCodeRepository,
        },
      ],
    }).compile();

    service = module.get<MaterialCodeService>(MaterialCodeService);
    repository = module.get<MaterialCodeRepository>(MaterialCodeRepository);
  });

  describe('getMaterialCodes', () => {
    it('should call the MaterialCodeRepository.getMaterialCodes() and return a list of material codes', async () => {
      expect(service).toBeDefined();
      const result = await service.getMaterialCodes();
      expect(result).toEqual([]);
      expect(repository.getMaterialCodes).toHaveBeenCalled();
    });
  });
});
