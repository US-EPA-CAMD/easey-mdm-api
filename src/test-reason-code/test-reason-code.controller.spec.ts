import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { TestReasonCodeController } from './test-reason-code.controller';
import { TestReasonCodeService } from './test-reason-code.service';

const mockTestReasonCodeService = () => ({
  getTestReasonCodes: jest.fn(() => []),
});

describe('TestReasonCodeController', () => {
  let controller: TestReasonCodeController;
  let service: TestReasonCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      controllers: [TestReasonCodeController],
      providers: [
        {
          provide: TestReasonCodeService,
          useFactory: mockTestReasonCodeService,
        },
      ],
    }).compile();

    controller = module.get<TestReasonCodeController>(TestReasonCodeController);
    service = module.get<TestReasonCodeService>(TestReasonCodeService);
  });

  describe('getTestReasonCodes', () => {
    it('should call the TestReasonCodeService and return a list of test reason codes', () => {
      expect(controller.getTestReasonCodes()).toEqual([]);
      expect(service.getTestReasonCodes).toHaveBeenCalled();
    });
  });
});
