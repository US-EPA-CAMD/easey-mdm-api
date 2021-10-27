import { Test, TestingModule } from '@nestjs/testing';
import { QualDataTypeCodeService } from './qual-data-type-code.service';
import { QualDataTypeCodeRepository } from './qual-data-type-code.repository';

const mockQualDataTypeCodeRepository = () => ({
  getQualDataTypeCodes: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('QualDataTypeCodeService', () => {
  let service: QualDataTypeCodeService;
  let repository: QualDataTypeCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QualDataTypeCodeService,
        {
          provide: QualDataTypeCodeRepository,
          useFactory: mockQualDataTypeCodeRepository,
        },
      ],
    }).compile();

    service = module.get<QualDataTypeCodeService>(QualDataTypeCodeService);
    repository = module.get<QualDataTypeCodeRepository>(
      QualDataTypeCodeRepository,
    );
  });

  describe('getQualDataTypeCodes', () => {
    it('calls the QualDataTypeCodeRepository and return qual dat type codes', async () => {
      const result = await service.getQualDataTypeCodes();
      expect(result).toEqual([]);
      expect(repository.getQualDataTypeCodes).toHaveBeenCalled();
    });
  });
});
