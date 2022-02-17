import { Test, TestingModule } from '@nestjs/testing';
import { OperatingLevelCodeController } from './operating-level-code.controller';
import { OperatingLevelCodeService } from './operating-level-code.service';

const mockOperatingLevelCodeService = () => ({
  getOperatingLevelCodes: jest.fn(() => []),
});

describe('OperatingLevelCodeController', () => {
  let controller: OperatingLevelCodeController;
  let service: OperatingLevelCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperatingLevelCodeController],
      providers: [
        {
          provide: OperatingLevelCodeService,
          useFactory: mockOperatingLevelCodeService,
        },
      ],
    }).compile();

    controller = module.get<OperatingLevelCodeController>(
      OperatingLevelCodeController,
    );
    service = module.get<OperatingLevelCodeService>(OperatingLevelCodeService);
  });

  describe('getOperatingLevelCodes', () => {
    it('should call the OperatingLevelCodeService and return a list of operating level codes', async () => {
      expect(await controller.getOperatingLevelCodes()).toEqual([]);
      expect(service.getOperatingLevelCodes).toHaveBeenCalled();
    });
  });
});
