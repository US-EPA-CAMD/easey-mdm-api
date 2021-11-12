import { Test, TestingModule } from '@nestjs/testing';
import { ShapeCodeService } from './shape-code.service';
import { ShapeCodeRepository } from './shape-code.repository';

const mockShapeCodeRepository = () => ({
  getShapeCodes: jest.fn(() => []),
});

describe('ShapeCodeService', () => {
  let service: ShapeCodeService;
  let repository: ShapeCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShapeCodeService,
        {
          provide: ShapeCodeRepository,
          useFactory: mockShapeCodeRepository,
        },
      ],
    }).compile();

    service = module.get<ShapeCodeService>(ShapeCodeService);
    repository = module.get<ShapeCodeRepository>(ShapeCodeRepository);
  });

  describe('getShapeCodes', () => {
    it('should call the ShapeCodeRepository.getShapeCodes() and return a list of shape codes', async () => {
      expect(service).toBeDefined();
      const result = await service.getShapeCodes();
      expect(result).toEqual([]);
      expect(repository.getShapeCodes).toHaveBeenCalled();
    });
  });
});
