import { Test, TestingModule } from '@nestjs/testing';
import { ProbeTypeCodeController } from './probe-type-code.controller';
import { ProbeTypeCodeService } from './probe-type-code.service';

const mockProbeTypeCodeService = () => ({
  getProbeTypeCodes: jest.fn(() => []),
});

describe('ProbeTypeCodeController', () => {
  let controller: ProbeTypeCodeController;
  let service: ProbeTypeCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProbeTypeCodeController],
      providers: [
        {
          provide: ProbeTypeCodeService,
          useFactory: mockProbeTypeCodeService,
        },
      ],
    }).compile();

    controller = module.get<ProbeTypeCodeController>(ProbeTypeCodeController);
    service = module.get<ProbeTypeCodeService>(ProbeTypeCodeService);
  });

  describe('getProbeTypeCodes', () => {
    it('should call the ProbeTypeCodeService and return a list of probe data type codes', () => {
      expect(controller.getProbeTypeCodes()).toEqual([]);
      expect(service.getProbeTypeCodes).toHaveBeenCalled();
    });
  });
});