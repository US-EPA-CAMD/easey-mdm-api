import { Test, TestingModule } from '@nestjs/testing';

import { ComponentTypeCodeController } from './component-type-code.controller';
import { ComponentTypeCodeService } from './component-type-code.service';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

const mockComponentTypeCodeService = () => ({
  getComponentTypeCodes: jest.fn(() => []),
});

describe('ComponentTypeCodeController', () => {
  let controller: ComponentTypeCodeController;
  let service: ComponentTypeCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      controllers: [ComponentTypeCodeController],
      providers: [
        {
          provide: ComponentTypeCodeService,
          useFactory: mockComponentTypeCodeService,
        },
      ],
    }).compile();

    controller = module.get<ComponentTypeCodeController>(
      ComponentTypeCodeController,
    );
    service = module.get<ComponentTypeCodeService>(ComponentTypeCodeService);
  });

  describe('getComponentTypeCodes', () => {
    it('should call the ComponentTypeCodeService and return a list of component type codes', async () => {
      expect(await controller.getComponentTypeCodes()).toEqual([]);
      expect(service.getComponentTypeCodes).toHaveBeenCalled();
    });
  });
});
