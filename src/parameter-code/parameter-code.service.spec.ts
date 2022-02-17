import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { ParameterCodeRepository } from './parameter-code.repository';
import { ParameterCodeService } from './parameter-code.service';

const mockParameterCodeRepository = () => ({
  getParameterCodes: jest.fn(() => []),
});

describe('ParameterCodeService', () => {
  let service: ParameterCodeService;
  let repository: ParameterCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({     
      imports: [LoggerModule],
      providers: [
        ParameterCodeService,
        {
          provide: ParameterCodeRepository,
          useFactory: mockParameterCodeRepository,
        },
      ],
    }).compile();

    service = module.get<ParameterCodeService>(ParameterCodeService);
    repository = module.get<ParameterCodeRepository>(ParameterCodeRepository);
  });

  describe('getParameterCodes', () => {
    it('should call the ParameterCodeRepository.getParameterCodes() and return a list of parameter-codes', async () => {
      const result = await service.getParameterCodes();
      expect(result).toEqual([]);
      expect(repository.getParameterCodes).toHaveBeenCalled();
    });
  });
});
