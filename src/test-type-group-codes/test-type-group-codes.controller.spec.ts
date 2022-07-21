import { Test, TestingModule } from '@nestjs/testing';
import { TestTypeGroupCodeDTO } from '../dto/test-type-group-code.dto';
import { TestTypeGroupCodesController } from './test-type-group-codes.controller';
import { TestTypeGroupCodesService } from './test-type-group-codes.service';

const testTypeGroupCodeDTO = new TestTypeGroupCodeDTO();

const mockService = () => ({
  getTestTypeGroupCodes: jest.fn().mockResolvedValue([testTypeGroupCodeDTO]),
});

describe('TestTypeGroupCodesController', () => {
  let controller: TestTypeGroupCodesController;
  let service: TestTypeGroupCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestTypeGroupCodesController],
      providers: [
        {
          provide: TestTypeGroupCodesService,
          useFactory: mockService,
        },
      ],
    }).compile();

    controller = module.get<TestTypeGroupCodesController>(
      TestTypeGroupCodesController,
    );
    service = module.get<TestTypeGroupCodesService>(TestTypeGroupCodesService);
  });

  describe('getTestTypeGroupCodes', () => {
    it('should call the service.getTestTypeGroupCodes and return a list of test type group codes', async () => {
      const result = await controller.getTestTypeGroupCodes();
      expect(result).toEqual([testTypeGroupCodeDTO]);
      expect(service.getTestTypeGroupCodes).toHaveBeenCalled();
    });
  });
});
