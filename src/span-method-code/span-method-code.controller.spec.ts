import { Test, TestingModule } from '@nestjs/testing';
import { SpanMethodCodeController } from './span-method-code.controller';
import { SpanMethodCodeService } from './span-method-code.service';

describe('SpanMethodCodeController', () => {
  let controller: SpanMethodCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpanMethodCodeController],
      providers: [SpanMethodCodeService],
    }).compile();

    controller = module.get<SpanMethodCodeController>(SpanMethodCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
