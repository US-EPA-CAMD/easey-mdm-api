import { Test, TestingModule } from '@nestjs/testing';
import { MatsMethodCodeController } from './mats-method-code.controller';
import { MatsMethodCodeService } from './mats-method-code.service';

describe('MatsMethodCodeController', () => {
  let controller: MatsMethodCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatsMethodCodeController],
      providers: [MatsMethodCodeService],
    }).compile();

    controller = module.get<MatsMethodCodeController>(MatsMethodCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
