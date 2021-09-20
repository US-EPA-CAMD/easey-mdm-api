import { Test, TestingModule } from '@nestjs/testing';
import { ParameterCodeController } from './parameter-code.controller';
import { ParameterCodeService } from './parameter-code.service';

const mockParameterCodeService = () => ({
  getParameterCodes: jest.fn(() => []),
});

describe('ParameterCodeController', () => {
  let controller: ParameterCodeController;
  let service: ParameterCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParameterCodeController],
      providers: [
        {
          provide: ParameterCodeService,
          useFactory: mockParameterCodeService,
        },
      ],
    }).compile();

    controller = module.get<ParameterCodeController>(ParameterCodeController);
    service = module.get<ParameterCodeService>(ParameterCodeService);
  });

  describe('getParameterCodes', () => {
    it('should call the ParameterCodeService and return a list of parameter-codes', () => {
      expect(controller.getParameterCodes()).toEqual([]);
      expect(service.getParameterCodes).toHaveBeenCalled();
    });
  });
});
