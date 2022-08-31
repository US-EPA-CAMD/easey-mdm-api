import { Test, TestingModule } from '@nestjs/testing';

import { AcquisitionMethodCodeController } from './acquisition-method-code.controller';
import { AcquisitionMethodCodeService } from './acquisition-method-code.service';
import { AcquisitionMethodCodeRepository } from './acquisition-method-code.repository';
import { AcquisitionMethodCodeMap } from '../maps/acquistion-method-code.map';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

describe('AcquisitionMethodCodeController', () => {
  let controller: AcquisitionMethodCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      controllers: [AcquisitionMethodCodeController],
      providers: [
        AcquisitionMethodCodeService,
        AcquisitionMethodCodeRepository,
        AcquisitionMethodCodeMap,
      ],
    }).compile();

    controller = module.get<AcquisitionMethodCodeController>(
      AcquisitionMethodCodeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
