import { Test, TestingModule } from '@nestjs/testing';

import { ComponentTypeCodeController } from './component-type-code.controller';
import { ComponentTypeCodeService } from './component-type-code.service';
import { ComponentTypeCodeMap } from '../maps/component-type-code.map';
import { ComponentTypeCodeRepository } from './component-type-code.repository';

describe('ComponentTypeCodeController', () => {
  let controller: ComponentTypeCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComponentTypeCodeController],
      providers: [
        ComponentTypeCodeService,
        ComponentTypeCodeRepository,
        ComponentTypeCodeMap,
      ],
    }).compile();

    controller = module.get<ComponentTypeCodeController>(
      ComponentTypeCodeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
