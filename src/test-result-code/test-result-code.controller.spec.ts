import { Test, TestingModule } from '@nestjs/testing';
import { TestResultCodeController } from './test-result-code.controller';
import { TestResultCodeService } from './test-result-code.service';

const mockTestResultCodeService = () => ({
  getTestResultCodes: jest.fn(() => {
    return [];
  }),
});

describe('TestResultCodeController', () => {
  let testResultCodeController: TestResultCodeController;
  let testResultCodeService: TestResultCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestResultCodeController],
      providers: [
        {
          provide: TestResultCodeService,
          useFactory: mockTestResultCodeService,
        },
      ],
    }).compile();

    testResultCodeController = module.get<TestResultCodeController>(
      TestResultCodeController,
    );
    testResultCodeService = module.get(TestResultCodeService);
  });

  it('should be defined', () => {
    expect(testResultCodeController).toBeDefined();
  });

  describe('getTestResultCodes', () => {
    it('should call the TestResultCodeService and return a list of test-result-codes', async () => {
      expect(testResultCodeController.getTestResultCodes()).toEqual([]);
      expect(testResultCodeService.getTestResultCodes).toHaveBeenCalled();
    });
  });
});
