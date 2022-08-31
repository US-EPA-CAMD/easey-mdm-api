import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { SpanMethodCodeRepository } from './span-method-code.repository';
import { SpanMethodCodeService } from './span-method-code.service';

const mockSpanMethodCodeRepository = () => ({
  getSpanMethodCodes: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('SpanMethodCodeService', () => {
  let service: SpanMethodCodeService;
  let repository: SpanMethodCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        SpanMethodCodeService,
        {
          provide: SpanMethodCodeRepository,
          useFactory: mockSpanMethodCodeRepository,
        },
      ],
    }).compile();

    service = module.get<SpanMethodCodeService>(SpanMethodCodeService);
    repository = module.get<SpanMethodCodeRepository>(SpanMethodCodeRepository);
  });

  describe('getSpanMethodCodes', () => {
    it('calls the SpanMethodCodeRepository and returns a span method codes', async () => {
      const result = await service.getSpanMethodCodes();
      expect(result).toEqual([]);
      expect(repository.getSpanMethodCodes).toHaveBeenCalled();
    });
  });
});
