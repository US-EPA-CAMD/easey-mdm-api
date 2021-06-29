import { Test, TestingModule } from '@nestjs/testing';
import { ParameterCodeController } from './parameter-code.controller';
import { ParameterCodeService } from './parameter-code.service';

describe('ParameterCodeController', () => {
  let controller: ParameterCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParameterCodeController],
      providers: [ParameterCodeService],
    }).compile();

    controller = module.get<ParameterCodeController>(ParameterCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
