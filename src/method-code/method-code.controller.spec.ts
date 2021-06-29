import { Test, TestingModule } from '@nestjs/testing';
import { MethodCodeController } from './method-code.controller';
import { MethodCodeService } from './method-code.service';

describe('MethodCodeController', () => {
  let controller: MethodCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MethodCodeController],
      providers: [MethodCodeService],
    }).compile();

    controller = module.get<MethodCodeController>(MethodCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
