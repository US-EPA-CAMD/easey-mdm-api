import { Test, TestingModule } from '@nestjs/testing';
import { MethodCodeService } from './method-code.service';
import { MethodCodeRepository } from './method-code.repository';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

const mockMethodCodeRepository = () => ({
  getMethodCodes: jest.fn(() => []),
});

describe('MethodCodeService', () => {
  let service: MethodCodeService;
  let repository: MethodCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        MethodCodeService,
        {
          provide: MethodCodeRepository,
          useFactory: mockMethodCodeRepository,
        },
      ],
    }).compile();

    service = module.get<MethodCodeService>(MethodCodeService);
    repository = module.get<MethodCodeRepository>(MethodCodeRepository);
  });

  describe('getMethodCodes', () => {
    it('should call the MethodCodeRepository.getMethodCodes() and return a list of method codes', async () => {
      expect(service).toBeDefined();
      const result = await service.getMethodCodes();
      expect(result).toEqual([]);
      expect(repository.getMethodCodes).toHaveBeenCalled();
    });
  });
});
