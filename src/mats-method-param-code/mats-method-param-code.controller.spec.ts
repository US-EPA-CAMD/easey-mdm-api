import { Test, TestingModule } from '@nestjs/testing';
import { MatsMethodParamCodeController } from './mats-method-param-code.controller';
import { MatsMethodParamCodeService } from './mats-method-param-code.service';

describe('MatsMethodParamCodeController', () => {
  let controller: MatsMethodParamCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatsMethodParamCodeController],
      providers: [MatsMethodParamCodeService],
    }).compile();

    controller = module.get<MatsMethodParamCodeController>(MatsMethodParamCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
