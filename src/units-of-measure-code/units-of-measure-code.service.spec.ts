import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { UnitsOfMeasureCodeRepository } from './units-of-measure-code.repository';
import { UnitsOfMeasureCodeService } from './units-of-measure-code.service';

const mockUnitsOfMeasureCodeRepository = () => ({
  getUnitsOfMeasureCodes: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('UnitsOfMeasureCodeService', () => {
  let service: UnitsOfMeasureCodeService;
  let repository: UnitsOfMeasureCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        UnitsOfMeasureCodeService,
        {
          provide: UnitsOfMeasureCodeRepository,
          useFactory: mockUnitsOfMeasureCodeRepository,
        },
      ],
    }).compile();

    service = module.get<UnitsOfMeasureCodeService>(UnitsOfMeasureCodeService);
    repository = module.get<UnitsOfMeasureCodeRepository>(
      UnitsOfMeasureCodeRepository,
    );
  });

  describe('getUnitsOfMeasureCodes', () => {
    it('calls the UnitsOfMeasureCodeRepository and return units of measure codes', async () => {
      const result = await service.getUnitsOfMeasureCodes();
      expect(result).toEqual([]);
      expect(repository.getUnitsOfMeasureCodes).toHaveBeenCalled();
    });
  });
});
