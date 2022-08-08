import { Test, TestingModule } from '@nestjs/testing';
import { RataFrequencyCodeDTO } from '../dto/rata-frequency-code.dto';
import { RataFrequencyCodeController } from './rata-frequency-code.controller';
import { RataFrequencyCodeService } from './rata-frequency-code.service';

const rataFreqDto = new RataFrequencyCodeDTO();
describe('RataFrequencyCodeController', () => {
  let controller: RataFrequencyCodeController;
  let service: RataFrequencyCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RataFrequencyCodeController],
      providers: [
        {
          provide: RataFrequencyCodeService,
          useFactory: () => ({
            getRataFrequencyCodes: jest.fn().mockResolvedValue([rataFreqDto]),
          }),
        },
      ],
    }).compile();

    controller = module.get<RataFrequencyCodeController>(
      RataFrequencyCodeController,
    );
    service = module.get<RataFrequencyCodeService>(RataFrequencyCodeService);
  });

  describe('getRataFrequencyCodes', () => {
    it('should call the getRataFrequencyCodes and return a list of rata-freqency-codes', async () => {
      expect(await controller.getRataFrequencyCodes()).toEqual([rataFreqDto]);
      expect(service.getRataFrequencyCodes).toHaveBeenCalled();
    });
  });
});
