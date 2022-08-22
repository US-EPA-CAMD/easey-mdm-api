import { Test, TestingModule } from '@nestjs/testing';
import { ReferenceMethodCodeDTO } from '../dto/reference-method-code.dto';
import { ReferenceMethodCodeController } from './reference-method-code.controller';
import { ReferenceMethodCodeService } from './reference-method-code.service';

const referenceMethodCodeDTO = new ReferenceMethodCodeDTO();

const mockReferenceMethodCodeService = () => ({
  getReferenceMethodCodes: jest.fn(() => [referenceMethodCodeDTO]),
});

describe('ReferenceMethodCodeController', () => {
  let controller: ReferenceMethodCodeController;
  let service: ReferenceMethodCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReferenceMethodCodeController],
      providers: [
        {
          provide: ReferenceMethodCodeService,
          useFactory: mockReferenceMethodCodeService,
        },
      ],
    }).compile();

    controller = module.get<ReferenceMethodCodeController>(
      ReferenceMethodCodeController,
    );
    service = module.get<ReferenceMethodCodeService>(
      ReferenceMethodCodeService,
    );
  });

  describe('getReferenceMethodCodes', () => {
    it('should call the getReferenceMethodCodes and return a list of Reference Method Codes', async () => {
      expect(controller.getReferenceMethodCodes()).toEqual([
        referenceMethodCodeDTO,
      ]);
      expect(service.getReferenceMethodCodes).toHaveBeenCalled();
    });
  });
});
