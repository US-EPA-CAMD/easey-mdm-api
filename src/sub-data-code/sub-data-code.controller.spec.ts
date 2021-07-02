import { Test, TestingModule } from '@nestjs/testing';
import { SubDataCodeController } from './sub-data-code.controller';
import { SubDataCodeService } from './sub-data-code.service';

const mockSubDataCodeService = () => ({
  getSubDataCodes: jest.fn(() => {
    return [];
  }),
});

describe('SubDataCodeController', () => {
  let subDataCodeController: SubDataCodeController;
  let subDataCodeService: SubDataCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubDataCodeController],
      providers: [
        {
          provide: SubDataCodeService,
          useFactory: mockSubDataCodeService,
        },
      ],
    }).compile();

    subDataCodeController = module.get<SubDataCodeController>(
      SubDataCodeController,
    );
    subDataCodeService = module.get<SubDataCodeService>(SubDataCodeService);
  });

  describe('getSubDataCodes', () => {
    it('should call the SubDataCodeService and return a list of sub-data-codes', async () => {
      expect(subDataCodeController.getSubDataCodes()).toEqual([]);
      expect(subDataCodeService.getSubDataCodes).toHaveBeenCalled();
    });
  });
});
