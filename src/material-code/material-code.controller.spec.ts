import { Test, TestingModule } from '@nestjs/testing';
import { MaterialCodeController } from './material-code.controller';
import { MaterialCodeService } from './material-code.service';

const mockMaterialCodeService = () => ({
  getMaterialCodes: jest.fn(() => []),
});

describe('MaterialCodeController', () => {
  let controller: MaterialCodeController;
  let service: MaterialCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaterialCodeController],
      providers: [
        {
          provide: MaterialCodeService,
          useFactory: mockMaterialCodeService,
        },
      ],
    }).compile();

    controller = module.get<MaterialCodeController>(MaterialCodeController);
    service = module.get<MaterialCodeService>(MaterialCodeService);
  });

  describe('getMethodCodes', () => {
    it('should call the MaterialCodeService and return a list of material codes', () => {
      expect(controller.getMaterialCodes()).toEqual([]);
      expect(service.getMaterialCodes).toHaveBeenCalled();
    });
  });
});
