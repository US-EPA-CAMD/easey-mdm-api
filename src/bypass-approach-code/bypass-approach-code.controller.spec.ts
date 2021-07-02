import { Test, TestingModule } from '@nestjs/testing';
import { BypassApproachCodeDTO } from '../dto/bypass-approach-code.dto';
import { BypassApproachCodesController } from './bypass-approach-code.controller';
import { BypassApproachCodeService } from './bypass-approach-code.service';

const mockBypassApproachCodeService = () => ({
  getBypassApproachCodes: jest.fn(() => []),
});

describe('BypassApproachCodesController', () => {
  let controller: BypassApproachCodesController;
  let bypassApproachCodeService: BypassApproachCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BypassApproachCodesController],
      providers: [
        {
          provide: BypassApproachCodeService,
          useFactory: mockBypassApproachCodeService,
        },
      ],
    }).compile();

    controller = module.get<BypassApproachCodesController>(
      BypassApproachCodesController,
    );
    bypassApproachCodeService = module.get<BypassApproachCodeService>(
      BypassApproachCodeService,
    );
  });

  describe('getBypassApproachCodes', () => {
    it('should call the BypassApproachCodeService and return a list of bypass-approach-codes', async () => {
      expect(controller.getBypassApproachCodes()).toEqual([]);
      expect(
        bypassApproachCodeService.getBypassApproachCodes,
      ).toHaveBeenCalled();
    });
  });
});
