import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { ReferenceMethodCodeService } from './reference-method-code.service';
import { ReferenceMethodCodeRepository } from './reference-method-code.repository';
import { ReferenceMethodCodeDTO } from '../dto/reference-method-code.dto';

const referenceMethodCodeDTO = new ReferenceMethodCodeDTO();

const mockReferenceMethodCodeRepository = () => ({
  find: jest.fn(() => [referenceMethodCodeDTO]),
});

describe('ReferenceMethodCodeService', () => {
  let service: ReferenceMethodCodeService;
  let repository: ReferenceMethodCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        ReferenceMethodCodeService,
        {
          provide: ReferenceMethodCodeRepository,
          useFactory: mockReferenceMethodCodeRepository,
        },
      ],
    }).compile();

    service = module.get<ReferenceMethodCodeService>(
      ReferenceMethodCodeService,
    );
    repository = module.get<ReferenceMethodCodeRepository>(
      ReferenceMethodCodeRepository,
    );
  });

  describe('getReferenceMethodCodes', () => {
    it('should call the ReferenceMethodCodeRepository.getReferenceMethodCodes() and return a list of ReferenceMethod codes', async () => {
      expect(service).toBeDefined();
      const result = await service.getReferenceMethodCodes();
      expect(result).toEqual([referenceMethodCodeDTO]);
      expect(repository.find).toHaveBeenCalled();
    });
  });
});
