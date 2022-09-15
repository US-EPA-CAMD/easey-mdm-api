import { Test, TestingModule } from '@nestjs/testing';
import { TestClaimCodeController } from './test-claim-code.controller';
import { TestClaimCodeService } from './test-claim-code.service';

const mockTestClaimCodeService = () => ({
  getTestClaimCodes: jest.fn(() => []),
});

describe('TestClaimCodeController', () => {
  let controller: TestClaimCodeController;
  let service: TestClaimCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestClaimCodeController],
      providers: [
        {
          provide: TestClaimCodeService,
          useFactory: mockTestClaimCodeService,
        },
      ],
    }).compile();

    controller = module.get<TestClaimCodeController>(TestClaimCodeController);
    service = module.get<TestClaimCodeService>(TestClaimCodeService);
  });

  describe('getTestClaimCodes', () => {
    it('should call the TestClaimCodeService and return a list of test claim codes', () => {
      expect(controller.getTestClaimCodes()).toEqual([]);
      expect(service.getTestClaimCodes).toHaveBeenCalled();
    });
  });
});