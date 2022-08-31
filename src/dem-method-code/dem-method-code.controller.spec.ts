import { Test, TestingModule } from '@nestjs/testing';
import { DemMethodCodeController } from './dem-method-code.controller';
import { DemMethodCodeService } from './dem-method-code.service';

const mockDemMethodCodeService = () => ({
  getDemMethodCodes: jest.fn().mockResolvedValue([]),
});

describe('DemMethodCodeController', () => {
  let controller: DemMethodCodeController;
  let service: DemMethodCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemMethodCodeController],
      providers: [
        {
          provide: DemMethodCodeService,
          useFactory: mockDemMethodCodeService,
        },
      ],
    }).compile();

    controller = module.get<DemMethodCodeController>(DemMethodCodeController);
    service = module.get<DemMethodCodeService>(DemMethodCodeService);
  });

  describe('getDemMethodCodes', () => {
    it('should call the DemMethodCodeService and return a list of demonstration method codes', async () => {
      expect(await controller.getDemMethodCodes()).toEqual([]);
      expect(service.getDemMethodCodes).toHaveBeenCalled();
    });
  });
});
