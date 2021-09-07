import { Test, TestingModule } from '@nestjs/testing';
import { ComponentTypeCodeService } from './component-type-code.service';

describe('ComponentTypeCodeService', () => {
  let service: ComponentTypeCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComponentTypeCodeService],
    }).compile();

    service = module.get<ComponentTypeCodeService>(ComponentTypeCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
