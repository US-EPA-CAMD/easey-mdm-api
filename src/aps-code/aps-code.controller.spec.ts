import { Test, TestingModule } from '@nestjs/testing';
import { ApsCodeDTO } from '../dto/aps-code.dto';
import { ApsCodeController } from './aps-code.controller';
import { ApsCodeService } from './aps-code.service';

const apsCodeDto = new ApsCodeDTO();

describe('ApsCodeController', () => {
  let controller: ApsCodeController;
  let service: ApsCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApsCodeController],
      providers: [
        {
          provide: ApsCodeService,
          useFactory: () => ({
            getApsCodes: jest.fn().mockResolvedValue([apsCodeDto]),
          }),
        },
      ],
    }).compile();

    controller = module.get<ApsCodeController>(ApsCodeController);
    service = module.get<ApsCodeService>(ApsCodeService);
  });

  describe('getApsCodes', () => {
    it('should call the ApsCodeService and return a list of aps codes', async () => {
      expect(await controller.getApsCodes()).toEqual([apsCodeDto]);
      expect(service.getApsCodes).toHaveBeenCalled();
    });
  });
});
