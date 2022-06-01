import { Test, TestingModule } from '@nestjs/testing';
import { TestTypeCodeController } from './test-type-code.controller';
import { TestTypeCodeService } from './test-type-code.service';

describe('TestTypeCodeController', () => {
  let controller: TestTypeCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestTypeCodeController],
      providers: [TestTypeCodeService],
    }).compile();

    controller = module.get<TestTypeCodeController>(TestTypeCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
