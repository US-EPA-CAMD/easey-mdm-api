import { Test, TestingModule } from '@nestjs/testing';
import { GasTypeCodeDTO } from '../dto/gas-type-code.dto';
import { GasTypeCodeController } from './gas-type-code.controller';
import { GasTypeCodeService } from './gas-type-code.service';

const gasTypeCodeDTO = new GasTypeCodeDTO();

const mockService = () => ({
  getGasTypeCodes: jest.fn().mockResolvedValue([gasTypeCodeDTO]),
});

describe('GasTypeCodeController', () => {
  let controller: GasTypeCodeController;
  let service: GasTypeCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GasTypeCodeController],
      providers: [
        {
          provide: GasTypeCodeService,
          useFactory: mockService,
        },
      ],
    }).compile();

    controller = module.get<GasTypeCodeController>(GasTypeCodeController);
    service = module.get<GasTypeCodeService>(GasTypeCodeService);
  });

  describe('getGasTypeCodes', () => {
    it('should call the service.getGasTypeCodes and return a list of gas type codes', async () => {
      const result = await controller.getGasTypeCodes();
      expect(result).toEqual([gasTypeCodeDTO]);
      expect(service.getGasTypeCodes).toHaveBeenCalled();
    });
  });
});
