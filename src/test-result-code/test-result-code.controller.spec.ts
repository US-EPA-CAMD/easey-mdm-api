import { Test, TestingModule } from '@nestjs/testing';
import { TestResultCodeController } from './test-result-code.controller';
import { TestResultCodeService } from './test-result-code.service';

describe('TestResultCodeController', () => {
  let controller: TestResultCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestResultCodeController],
      providers: [TestResultCodeService],
    }).compile();

    controller = module.get<TestResultCodeController>(TestResultCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
