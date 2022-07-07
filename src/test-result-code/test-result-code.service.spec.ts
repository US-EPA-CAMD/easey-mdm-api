import { Test, TestingModule } from '@nestjs/testing';
import { TestResultCodeService } from './test-result-code.service';

describe('TestResultCodeService', () => {
  let service: TestResultCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestResultCodeService],
    }).compile();

    service = module.get<TestResultCodeService>(TestResultCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
