import { Test, TestingModule } from '@nestjs/testing';
import { MatsMethodParamCodeController } from './mats-method-param-code.controller';
import { MatsMethodParamCodeService } from './mats-method-param-code.service';

const mockMatsMethodParamCodeService = () => ({
  getMatsMethodParamCodes: jest.fn(() => []),
});

describe('MatsMethodParamCodeController', () => {
  let controller: MatsMethodParamCodeController;
  let matsMethodParamCodeService: MatsMethodParamCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatsMethodParamCodeController],
      providers: [
        {
          provide: MatsMethodParamCodeService,
          useFactory: mockMatsMethodParamCodeService,
        },
      ],
    }).compile();

    controller = module.get<MatsMethodParamCodeController>(
      MatsMethodParamCodeController,
    );
    matsMethodParamCodeService = module.get<MatsMethodParamCodeService>(
      MatsMethodParamCodeService,
    );
  });

  describe('getMethodCodes', () => {
    it('should call the MatsMethodParamCodeService and return a list of mats method param codes', () => {
      expect(controller.getMethodCodes()).toEqual([]);
      expect(
        matsMethodParamCodeService.getMatsMethodParamCodes,
      ).toHaveBeenCalled();
    });
  });
});
