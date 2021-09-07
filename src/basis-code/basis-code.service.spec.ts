import { Test, TestingModule } from '@nestjs/testing';
import { BasisCodeService } from './basis-code.service';

describe('BasisCodeService', () => {
  let service: BasisCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasisCodeService],
    }).compile();

    service = module.get<BasisCodeService>(BasisCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
