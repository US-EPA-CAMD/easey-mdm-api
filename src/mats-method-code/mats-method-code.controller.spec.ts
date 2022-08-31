import { Test, TestingModule } from '@nestjs/testing';
import { MatsMethodCodeController } from './mats-method-code.controller';
import { MatsMethodCodeService } from './mats-method-code.service';

const mockMatsMethodCodeService = () => ({
  getMatsMethodCodes: jest.fn(() => []),
});

describe('MatsMethodCodeController', () => {
  let controller: MatsMethodCodeController;
  let matsMethodCodeService: MatsMethodCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatsMethodCodeController],
      providers: [
        {
          provide: MatsMethodCodeService,
          useFactory: mockMatsMethodCodeService,
        },
      ],
    }).compile();

    controller = module.get<MatsMethodCodeController>(MatsMethodCodeController);
    matsMethodCodeService = module.get<MatsMethodCodeService>(
      MatsMethodCodeService,
    );
  });

  describe('getMethodCodes', () => {
    it('should call the MatsMethodCodeService and return a list of mats method codes', () => {
      expect(controller.getMethodCodes()).toEqual([]);
      expect(matsMethodCodeService.getMatsMethodCodes).toHaveBeenCalled();
    });
  });
});
