import { Test, TestingModule } from '@nestjs/testing';
import { ReferenceMethodCodeService } from './reference-method-code.service';

describe('ReferenceMethodCodeService', () => {
  let service: ReferenceMethodCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReferenceMethodCodeService],
    }).compile();

    service = module.get<ReferenceMethodCodeService>(ReferenceMethodCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
