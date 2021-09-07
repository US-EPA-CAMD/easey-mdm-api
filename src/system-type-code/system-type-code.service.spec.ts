import { Test, TestingModule } from '@nestjs/testing';
import { SystemTypeCodeService } from './system-type-code.service';

describe('SystemTypeCodeService', () => {
  let service: SystemTypeCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemTypeCodeService],
    }).compile();

    service = module.get<SystemTypeCodeService>(SystemTypeCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
