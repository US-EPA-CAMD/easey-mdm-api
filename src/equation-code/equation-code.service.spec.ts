import { Test, TestingModule } from '@nestjs/testing';
import { EquationCodeRepository } from './equation-code.repository';
import { EquationCodeService } from './equation-code.service';

const mockEquationCodeRepository = () => ({
  getEquationCodes: jest.fn(() => []),
});

describe('EquationCodeService', () => {
  let service: EquationCodeService;
  let repository: EquationCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EquationCodeService,
        {
          provide: EquationCodeRepository,
          useFactory: mockEquationCodeRepository,
        },
      ],
    }).compile();

    service = module.get<EquationCodeService>(EquationCodeService);
    repository = module.get<EquationCodeRepository>(EquationCodeRepository);
  });

  describe('getEquationCodes', () => {
    it('should call the EquationCodeRepository.getEquationCodes() and return a list of equation codes', async () => {
      const result = await service.getEquationCodes();
      expect(result).toEqual([]);
      expect(repository.getEquationCodes).toHaveBeenCalled();
    });
  });
});
