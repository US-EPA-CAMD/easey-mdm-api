import { Test, TestingModule } from '@nestjs/testing';
import { TestTypeCodeRepository } from './test-type-code.repository';
import { TestTypeCodeService } from './test-type-code.service';

const mockRepository = () => ({});

describe('TestTypeCodeService', () => {
  let service: TestTypeCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TestTypeCodeService,
        {
          provide: TestTypeCodeRepository,
          useFactory: mockRepository,
        },
      ],
    }).compile();

    service = module.get<TestTypeCodeService>(TestTypeCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
