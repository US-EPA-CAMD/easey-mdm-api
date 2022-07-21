import { Test, TestingModule } from '@nestjs/testing';
import { TestTypeGroupCodesService } from './test-type-group-codes.service';

describe('TestTypeGroupCodesService', () => {
  let service: TestTypeGroupCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestTypeGroupCodesService],
    }).compile();

    service = module.get<TestTypeGroupCodesService>(TestTypeGroupCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
