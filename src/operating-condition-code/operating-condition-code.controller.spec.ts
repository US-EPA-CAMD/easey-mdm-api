import { Test, TestingModule } from '@nestjs/testing';
import { OperatingConditionCodeController } from './operating-condition-code.controller';
import { OperatingConditionCodeService } from './operating-condition-code.service';

const mockOperatingConditionCodeService = () => ({
  getOperatingConditionCodes: jest.fn(() => {
    return [];
  }),
});

describe('OperatingConditionCodeController', () => {
  let controller: OperatingConditionCodeController;
  let service: OperatingConditionCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperatingConditionCodeController],
      providers: [
        {
          provide: OperatingConditionCodeService,
          useFactory: mockOperatingConditionCodeService,
        },
      ],
    }).compile();

    controller = module.get<OperatingConditionCodeController>(
      OperatingConditionCodeController,
    );
    service = module.get<OperatingConditionCodeService>(
      OperatingConditionCodeService,
    );
  });

  describe('getOperatingConditionCodes', () => {
    it('should call the OperatingConditionCodeService and return a list of operating condition codes', async () => {
      expect(controller.getOperatingConditionCodes()).toEqual([]);
      expect(service.getOperatingConditionCodes).toHaveBeenCalled();
    });
  });
});
