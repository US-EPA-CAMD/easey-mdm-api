import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { SpanScaleCodeRepository } from './span-scale-code.repository';
import { SpanScaleCodeService } from './span-scale-code.service';

const mockSpanScaleCodeRepository = () => ({
  getSpanScaleCodes: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('SpanScaleCodeService', () => {
  let service: SpanScaleCodeService;
  let repository: SpanScaleCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        SpanScaleCodeService,
        {
          provide: SpanScaleCodeRepository,
          useFactory: mockSpanScaleCodeRepository,
        },
      ],
    }).compile();

    service = module.get<SpanScaleCodeService>(SpanScaleCodeService);
    repository = module.get<SpanScaleCodeRepository>(SpanScaleCodeRepository);
  });

  describe('getSpanScaleCodes', () => {
    it('calls the SpanScaleCodeRepository and returns a span scale codes', async () => {
      const result = await service.getSpanScaleCodes();
      expect(result).toEqual([]);
      expect(repository.getSpanScaleCodes).toHaveBeenCalled();
    });
  });
});
