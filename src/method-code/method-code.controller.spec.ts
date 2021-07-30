import { Test, TestingModule } from '@nestjs/testing';
import { MethodCodeController } from './method-code.controller';
import { MethodCodeService } from './method-code.service';

const mockMethodCodeService = () => ({
  getMethodCodes: jest.fn(() => []),
});

describe('MethodCodeController', () => {
  let controller: MethodCodeController;
  let methodCodeService: MethodCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MethodCodeController],
      providers: [
        {
          provide: MethodCodeService,
          useFactory: mockMethodCodeService,
        },
      ],
    }).compile();

    controller = module.get<MethodCodeController>(MethodCodeController);
    methodCodeService = module.get<MethodCodeService>(MethodCodeService);
  });

  describe('getMethodCodes', () => {
    it('should call the MethodCodeService and return a list of method codes', () => {
      expect(controller.getMethodCodes()).toEqual([]);
      expect(methodCodeService.getMethodCodes).toHaveBeenCalled();
    });
  });
});
