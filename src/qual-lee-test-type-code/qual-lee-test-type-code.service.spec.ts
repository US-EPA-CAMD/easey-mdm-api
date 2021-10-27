import { Test, TestingModule } from '@nestjs/testing';
import { QualLeeTestTypeCodeService } from './qual-lee-test-type-code.service';
import { QualLeeTestTypeCodeRepository } from './qual-lee-test-type-code.repository';

const mockQualLeeTestTypeCodeRepository = () => ({
  getQualLeeTestTypeCodes: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('QualLeeTestTypeCodeService', () => {
  let service: QualLeeTestTypeCodeService;
  let repository: QualLeeTestTypeCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QualLeeTestTypeCodeService,
        {
          provide: QualLeeTestTypeCodeRepository,
          useFactory: mockQualLeeTestTypeCodeRepository,
        },
      ],
    }).compile();

    service = module.get<QualLeeTestTypeCodeService>(
      QualLeeTestTypeCodeService,
    );
    repository = module.get<QualLeeTestTypeCodeRepository>(
      QualLeeTestTypeCodeRepository,
    );
  });

  describe('getQualLeeTestTypeCodes', () => {
    it('calls the QualLeeTestTypeCodeRepository and return qual LEE test type codes', async () => {
      const result = await service.getQualLeeTestTypeCodes();
      expect(result).toEqual([]);
      expect(repository.getQualLeeTestTypeCodes).toHaveBeenCalled();
    });
  });
});
