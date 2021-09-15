import { Test, TestingModule } from '@nestjs/testing';
import { SpanScaleCodeController } from './span-scale-code.controller';
import { SpanScaleCodeService } from './span-scale-code.service';

describe('SpanScaleCodeController', () => {
  let controller: SpanScaleCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpanScaleCodeController],
      providers: [SpanScaleCodeService],
    }).compile();

    controller = module.get<SpanScaleCodeController>(SpanScaleCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
