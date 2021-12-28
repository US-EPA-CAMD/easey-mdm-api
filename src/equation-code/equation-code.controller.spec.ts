import { Test, TestingModule } from '@nestjs/testing';
import { EquationCodeController } from './equation-code.controller';
import { EquationCodeService } from './equation-code.service';

const mockEquationCodeService = () => ({
  getEquationCodes: jest.fn(() => {
    return [];
  }),
});

describe('EquationCodeController', () => {
  let controller: EquationCodeController;
  let service: EquationCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquationCodeController],
      providers: [
        {
          provide: EquationCodeService,
          useFactory: mockEquationCodeService,
        },
      ],
    }).compile();

    controller = module.get<EquationCodeController>(EquationCodeController);
    service = module.get<EquationCodeService>(EquationCodeService);
  });

  describe('getEquationCodes', () => {
    it('should call the EquationCodeService and return a list of equation codes', async () => {
      expect(await controller.getEquationCodes()).toEqual([]);
      expect(service.getEquationCodes).toHaveBeenCalled();
    });
  });
});
