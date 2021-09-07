import { Test, TestingModule } from '@nestjs/testing';
import { ComponentTypeCodeController } from './component-type-code.controller';
import { ComponentTypeCodeService } from './component-type-code.service';

describe('ComponentTypeCodeController', () => {
  let controller: ComponentTypeCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComponentTypeCodeController],
      providers: [ComponentTypeCodeService],
    }).compile();

    controller = module.get<ComponentTypeCodeController>(ComponentTypeCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
