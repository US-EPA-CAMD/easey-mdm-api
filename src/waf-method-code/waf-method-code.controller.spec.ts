import { Test, TestingModule } from '@nestjs/testing';
import { WafMethodCodeController } from './waf-method-code.controller';

describe('WafMethodCodeController', () => {
  let controller: WafMethodCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WafMethodCodeController],
    }).compile();

    controller = module.get<WafMethodCodeController>(WafMethodCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
