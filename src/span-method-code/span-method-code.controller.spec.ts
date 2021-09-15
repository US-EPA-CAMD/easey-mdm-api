import { Test, TestingModule } from '@nestjs/testing';
import { SpanMethodCodeController } from './span-method-code.controller';
import { SpanMethodCodeService } from './span-method-code.service';

const mockSpanMethodCodeService = () => ({
  getSpanMethodCodes: jest.fn(() => {
    return [];
  }),
});

describe('SpanMethodCodeController', () => {
  let controller: SpanMethodCodeController;
  let service: SpanMethodCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpanMethodCodeController],
      providers: [
        {
          provide: SpanMethodCodeService,
          useFactory: mockSpanMethodCodeService,
        },
      ],
    }).compile();

    controller = module.get<SpanMethodCodeController>(SpanMethodCodeController);
    service = module.get<SpanMethodCodeService>(SpanMethodCodeService);
  });

  describe('getAnalyzerRangeCodes', () => {
    it('should call the SpanMethodCodeService and return a list of span method codes', async () => {
      expect(controller.getSpanMethodCodes()).toEqual([]);
      expect(service.getSpanMethodCodes).toHaveBeenCalled();
    });
  });
});
