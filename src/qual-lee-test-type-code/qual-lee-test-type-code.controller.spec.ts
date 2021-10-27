import { Test, TestingModule } from '@nestjs/testing';
import { QualLeeTestTypeCodeController } from './qual-lee-test-type-code.controller';
import { QualLeeTestTypeCodeService } from './qual-lee-test-type-code.service';

const mockQualLeeTestTypeCodeService = () => ({
  getQualLeeTestTypeCodes: jest.fn(() => []),
});

describe('QualLeeTestTypeCodeController', () => {
  let controller: QualLeeTestTypeCodeController;
  let service: QualLeeTestTypeCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QualLeeTestTypeCodeController],
      providers: [
        {
          provide: QualLeeTestTypeCodeService,
          useFactory: mockQualLeeTestTypeCodeService,
        },
      ],
    }).compile();

    controller = module.get<QualLeeTestTypeCodeController>(
      QualLeeTestTypeCodeController,
    );
    service = module.get<QualLeeTestTypeCodeService>(
      QualLeeTestTypeCodeService,
    );
  });

  describe('getQualLeeTestTypeCodes', () => {
    it('should call the QualLeeTestTypeCodeService and return a list of qual LEE test type codes', () => {
      expect(controller.getQualLeeTestTypeCodes()).toEqual([]);
      expect(service.getQualLeeTestTypeCodes).toHaveBeenCalled();
    });
  });
});
