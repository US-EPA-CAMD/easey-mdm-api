import { Test, TestingModule } from '@nestjs/testing';

import { ComponentTypeCodeController } from './component-type-code.controller';
import { ComponentTypeCodeService } from './component-type-code.service';
import { ComponentTypeCodeMap } from '../maps/component-type-code.map';
import { ComponentTypeCodeRepository } from './component-type-code.repository';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

describe('ComponentTypeCodeController', () => {
  let controller: ComponentTypeCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
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
