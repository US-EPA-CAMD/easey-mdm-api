import { Test, TestingModule } from '@nestjs/testing';
import { MaxRateSourceCodeController } from './max-rate-source-code.controller';
import { MaxRateSourceCodeService } from './max-rate-source-code.service';

const mockMaxRateSourceCodeService = () => ({
  getMaxRateSourceCodes: jest.fn(() => {
    return [];
  }),
});

describe('MaxRateSourceCodeController', () => {
  let controller: MaxRateSourceCodeController;
  let service: MaxRateSourceCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaxRateSourceCodeController],
      providers: [
        {
          provide: MaxRateSourceCodeService,
          useFactory: mockMaxRateSourceCodeService,
        },
      ],
    }).compile();

    controller = module.get<MaxRateSourceCodeController>(
      MaxRateSourceCodeController,
    );
    service = module.get<MaxRateSourceCodeService>(MaxRateSourceCodeService);
  });

  describe('getMaxRateSourceCodes', () => {
    it('should call the MaxRateSourceCodeService and return a list of max rate source codes', async () => {
      expect(controller.getMaxRateSourceCodes()).toEqual([]);
      expect(service.getMaxRateSourceCodes).toHaveBeenCalled();
    });
  });
});
