import { Test, TestingModule } from '@nestjs/testing';
import { DefaultSourceCodeController } from './default-source-code.controller';
import { DefaultSourceCodeService } from './default-source-code.service';

const mockDefaultSourceCodeService = () => ({
  getDefaultSourceCodes: jest.fn(() => {
    return [];
  }),
});

describe('DefaultSourceCodeController', () => {
  let controller: DefaultSourceCodeController;
  let service: DefaultSourceCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefaultSourceCodeController],
      providers: [
        {
          provide: DefaultSourceCodeService,
          useFactory: mockDefaultSourceCodeService,
        },
      ],
    }).compile();

    controller = module.get<DefaultSourceCodeController>(
      DefaultSourceCodeController,
    );
    service = module.get<DefaultSourceCodeService>(DefaultSourceCodeService);
  });

  describe('getDefaultSourceCodes', () => {
    it('should call the DefaultSourceCodeService and return a list of default source codes', async () => {
      expect(controller.getDefaultSourceCodes()).toEqual([]);
      expect(service.getDefaultSourceCodes).toHaveBeenCalled();
    });
  });
});
