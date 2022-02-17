import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { DefaultPurposeCodeController } from './default-purpose-code.controller';
import { DefaultPurposeCodeService } from './default-purpose-code.service';

const mockDefaultPurposeCodeService = () => ({
  getDefaultPurposeCodes: jest.fn(() => []),
});

describe('DefaultPurposeCodeController', () => {
  let controller: DefaultPurposeCodeController;
  let defaultPurposeCodeService: DefaultPurposeCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      controllers: [DefaultPurposeCodeController],
      providers: [
        {
          provide: DefaultPurposeCodeService,
          useFactory: mockDefaultPurposeCodeService,
        },
      ],
    }).compile();

    controller = module.get<DefaultPurposeCodeController>(
      DefaultPurposeCodeController,
    );
    defaultPurposeCodeService = module.get<DefaultPurposeCodeService>(
      DefaultPurposeCodeService,
    );
  });

  describe('getDefaultPurposeCodes', () => {
    it('should call the DefaultPurposeCodeService and return a list of default purpose codes', async () => {
      expect(await controller.getDefaultPurposeCodes()).toEqual([]);
      expect(
        defaultPurposeCodeService.getDefaultPurposeCodes,
      ).toHaveBeenCalled();
    });
  });
});
