import { Test, TestingModule } from '@nestjs/testing';
import { RunStatusCodeDTO } from '../dto/run-status-code.dto';
import { RunStatusCodeController } from './run-status-code.controller';
import { RunStatusCodeService } from './run-status-code.service';

const runStatusDto = new RunStatusCodeDTO();
describe('RunStatusCodeController', () => {
  let controller: RunStatusCodeController;
  let service: RunStatusCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RunStatusCodeController],
      providers: [
        {
          provide: RunStatusCodeService,
          useFactory: () => ({
            getRunStatusCodes: jest.fn().mockResolvedValue([runStatusDto]),
          }),
        },
      ],
    }).compile();

    controller = module.get<RunStatusCodeController>(
      RunStatusCodeController,
    );
    service = module.get<RunStatusCodeService>(RunStatusCodeService);
  });

  describe('getRunStatusCodes', () => {
    it('should call the getRunStatusCodes and return a list of run-status-codes', async () => {
      expect(await controller.getRunStatusCodes()).toEqual([runStatusDto]);
      expect(service.getRunStatusCodes).toHaveBeenCalled();
    });
  });
});
