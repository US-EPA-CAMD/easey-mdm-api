import { Test, TestingModule } from '@nestjs/testing';

import { SystemDesignationCodeController } from './system-designation-code.controller';
import { SystemDesignationCodeService } from './system-designation-code.service';
import { SystemDesignationCodeRepository } from './system-designation-code.repository';
import { SystemDesignationCodeMap } from '../maps/system-designation-code.map';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

const mockSystemDesignationCodeService = () => ({
  getSystemDesignationCodes: jest.fn(() => []),
});

describe('SystemDesignationCodeController', () => {
  let controller: SystemDesignationCodeController;
  let service: SystemDesignationCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      controllers: [SystemDesignationCodeController],
      providers: [
        {
          provide: SystemDesignationCodeService,
          useFactory: mockSystemDesignationCodeService,
        },
        SystemDesignationCodeRepository,
        SystemDesignationCodeMap,
      ],
    }).compile();

    controller = module.get<SystemDesignationCodeController>(
      SystemDesignationCodeController,
    );

    service = module.get<SystemDesignationCodeService>(
      SystemDesignationCodeService,
    );
  });

  describe('getSystemDesignationCodes', () => {
    it('should call the SystemDesignationCodeService and return a list of system designation codes', async () => {
      expect(await controller.getSystemDesignationCodes()).toEqual([]);
      expect(service.getSystemDesignationCodes).toHaveBeenCalled();
    });
  });
});
