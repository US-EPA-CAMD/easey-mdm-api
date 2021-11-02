import { Test, TestingModule } from '@nestjs/testing';
import { QualDataTypeCodeController } from './qual-data-type-code.controller';
import { QualDataTypeCodeService } from './qual-data-type-code.service';

const mockQualDataTypeCodeService = () => ({
  getQualDataTypeCodes: jest.fn(() => []),
});

describe('QualDataTypeCodeController', () => {
  let controller: QualDataTypeCodeController;
  let service: QualDataTypeCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QualDataTypeCodeController],
      providers: [
        {
          provide: QualDataTypeCodeService,
          useFactory: mockQualDataTypeCodeService,
        },
      ],
    }).compile();

    controller = module.get<QualDataTypeCodeController>(
      QualDataTypeCodeController,
    );
    service = module.get<QualDataTypeCodeService>(QualDataTypeCodeService);
  });

  describe('getQualDataTypeCodes', () => {
    it('should call the QualDataTypeCodeService and return a list of qual data type codes', () => {
      expect(controller.getQualDataTypeCodes()).toEqual([]);
      expect(service.getQualDataTypeCodes).toHaveBeenCalled();
    });
  });
});
