import { Test, TestingModule } from '@nestjs/testing';
import { TestTypeCodeService } from './test-type-code.service';

describe('TestTypeCodeService', () => {
  let service: TestTypeCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestTypeCodeService],
    }).compile();

    service = module.get<TestTypeCodeService>(TestTypeCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
