import { Test, TestingModule } from '@nestjs/testing';
import { BasisCodeController } from './basis-code.controller';
import { BasisCodeService } from './basis-code.service';

describe('BasisCodeController', () => {
  let controller: BasisCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasisCodeController],
      providers: [BasisCodeService],
    }).compile();

    controller = module.get<BasisCodeController>(BasisCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
