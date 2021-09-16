import { Test, TestingModule } from '@nestjs/testing';

import { ComponentTypeCodeService } from './component-type-code.service';
import { ComponentTypeCodeRepository } from './component-type-code.repository';
import { ComponentTypeCodeMap } from '../maps/component-type-code.map';

describe('ComponentTypeCodeService', () => {
  let mockComponentTypeCodeRepository = () => ({
    getComponentTypeCodes: jest.fn(),
  });
  let service: ComponentTypeCodeService;
  let repository: ComponentTypeCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ComponentTypeCodeService,
        {
          provide: ComponentTypeCodeRepository,
          useFactory: mockComponentTypeCodeRepository,
        },
        ComponentTypeCodeMap,
      ],
    }).compile();

    service = module.get<ComponentTypeCodeService>(ComponentTypeCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
