import { Test, TestingModule } from '@nestjs/testing';
import { TestTypeGroupCodeDTO } from '../dto/test-type-group-code.dto';
import { TestTypeGroupCodesController } from './test-type-group-codes.controller';
import { TestTypeGroupCodesService } from './test-type-group-codes.service';

const testTypeGroupCodeDTO = new TestTypeGroupCodeDTO();

const mockService = () => ({
  getGasTypeCodes: jest.fn().mockResolvedValue([testTypeGroupCodeDTO]),
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

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
