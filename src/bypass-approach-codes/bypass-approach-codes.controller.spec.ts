import { Test, TestingModule } from '@nestjs/testing';
import { BypassApproachCodesController } from './bypass-approach-codes.controller';

describe('BypassApproachCodesController', () => {
  let controller: BypassApproachCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BypassApproachCodesController],
    }).compile();

    controller = module.get<BypassApproachCodesController>(BypassApproachCodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
