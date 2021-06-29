import { Test, TestingModule } from '@nestjs/testing';
import { MethodCodeService } from './method-code.service';

describe('MethodCodeService', () => {
  let service: MethodCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MethodCodeService],
    }).compile();

    service = module.get<MethodCodeService>(MethodCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
