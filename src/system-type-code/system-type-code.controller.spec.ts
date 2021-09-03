import { Test, TestingModule } from '@nestjs/testing';
import { SystemTypeCodeController } from './system-type-code.controller';
import { SystemTypeCodeService } from './system-type-code.service';

describe('SystemTypeCodeController', () => {
  let controller: SystemTypeCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemTypeCodeController],
      providers: [SystemTypeCodeService],
    }).compile();

    controller = module.get<SystemTypeCodeController>(SystemTypeCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
