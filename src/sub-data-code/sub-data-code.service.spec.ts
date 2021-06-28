import { Test, TestingModule } from '@nestjs/testing';
import { SubDataCodeService } from './sub-data-code.service';

describe('SubDataCodeService', () => {
  let service: SubDataCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubDataCodeService],
    }).compile();

    service = module.get<SubDataCodeService>(SubDataCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
