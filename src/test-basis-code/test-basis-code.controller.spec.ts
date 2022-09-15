import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { TestBasisCodeController } from './test-basis-code.controller';
import { TestBasisCodeService } from './test-basis-code.service';

const mockTestBasisCodeService = () => ({
  getTestBasisCodes: jest.fn(() => []),
});

describe('TestBasisCodeController', () => {
  let controller: TestBasisCodeController;
  let service: TestBasisCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      controllers: [TestBasisCodeController],
      providers: [
        {
          provide: TestBasisCodeService,
          useFactory: mockTestBasisCodeService,
        },
      ],
    }).compile();

    controller = module.get<TestBasisCodeController>(TestBasisCodeController);
    service = module.get<TestBasisCodeService>(TestBasisCodeService);
  });

  describe('getTestBasisCodes', () => {
    it('should call the TestBasisCodeService and return a list of test basis codes', async () => {
      expect(await controller.getTestBasisCodes()).toEqual([]);
      expect(service.getTestBasisCodes).toHaveBeenCalled();
    });
  });
});
