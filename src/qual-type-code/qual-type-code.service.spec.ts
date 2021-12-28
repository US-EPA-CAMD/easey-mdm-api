import { Test, TestingModule } from '@nestjs/testing';
import { QualTypeCodeService } from './qual-type-code.service';
import { QualTypeCodeRepository } from './qual-type-code.repository';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

const mockQualTypeCodeRepository = () => ({
  getQualTypeCodes: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('QualTypeCodeService', () => {
  let service: QualTypeCodeService;
  let repository: QualTypeCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        QualTypeCodeService,
        {
          provide: QualTypeCodeRepository,
          useFactory: mockQualTypeCodeRepository,
        },
      ],
    }).compile();

    service = module.get<QualTypeCodeService>(QualTypeCodeService);
    repository = module.get<QualTypeCodeRepository>(QualTypeCodeRepository);
  });

  describe('getQualTypeCodes', () => {
    it('calls the QualTypeCodeRepository and return qual type codes', async () => {
      const result = await service.getQualTypeCodes();
      expect(result).toEqual([]);
      expect(repository.getQualTypeCodes).toHaveBeenCalled();
    });
  });
});
