import { Test, TestingModule } from '@nestjs/testing';
import { QualTypeCodeController } from './qual-type-code.controller';
import { QualTypeCodeService } from './qual-type-code.service';

const mockQualTypeCodeService = () => ({
  getQualTypeCodes: jest.fn(() => []),
});

describe('QualTypeCodeController', () => {
  let controller: QualTypeCodeController;
  let service: QualTypeCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QualTypeCodeController],
      providers: [
        {
          provide: QualTypeCodeService,
          useFactory: mockQualTypeCodeService,
        },
      ],
    }).compile();

    controller = module.get<QualTypeCodeController>(QualTypeCodeController);
    service = module.get<QualTypeCodeService>(QualTypeCodeService);
  });

  describe('getQualTypeCodes', () => {
    it('should call the QualTypeCodeService and return a list of qual data type codes', () => {
      expect(controller.getQualTypeCodes()).toEqual([]);
      expect(service.getQualTypeCodes).toHaveBeenCalled();
    });
  });
});
