import { Test, TestingModule } from '@nestjs/testing';
import { ControlEquipParamCodeController } from './control-equip-param-code.controller';
import { ControlEquipParamCodeService } from './control-equip-param-code.service';

const mockControlEquipParamCodeService = () => ({
  getControlEquipParamCodes: jest.fn(() => []),
});

describe('ControlEquipParamCodeController', () => {
  let controller: ControlEquipParamCodeController;
  let defaultPurposeCodeService: ControlEquipParamCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControlEquipParamCodeController],
      providers: [
        {
          provide: ControlEquipParamCodeService,
          useFactory: mockControlEquipParamCodeService,
        },
      ],
    }).compile();

    controller = module.get<ControlEquipParamCodeController>(
      ControlEquipParamCodeController,
    );
    defaultPurposeCodeService = module.get<ControlEquipParamCodeService>(
      ControlEquipParamCodeService,
    );
  });

  describe('getControlEquipParamCodes', () => {
    it('should call the ControlEquipParamCodeService and return a list of control equipment parameter codes', async () => {
      expect(controller.getControlEquipParamCodes()).toEqual([]);
      expect(
        defaultPurposeCodeService.getControlEquipParamCodes,
      ).toHaveBeenCalled();
    });
  });
});
