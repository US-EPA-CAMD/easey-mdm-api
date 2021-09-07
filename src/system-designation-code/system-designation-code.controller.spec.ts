import { Test, TestingModule } from '@nestjs/testing';
import { SystemDesignationCodeController } from './system-designation-code.controller';
import { SystemDesignationCodeService } from './system-designation-code.service';

describe('SystemDesignationCodeController', () => {
  let controller: SystemDesignationCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemDesignationCodeController],
      providers: [SystemDesignationCodeService],
    }).compile();

    controller = module.get<SystemDesignationCodeController>(SystemDesignationCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
