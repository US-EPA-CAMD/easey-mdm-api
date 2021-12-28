import { Test, TestingModule } from '@nestjs/testing';

import { SystemTypeCodeController } from './system-type-code.controller';
import { SystemTypeCodeService } from './system-type-code.service';
import { SystemTypeCodeRepository } from './system-type-code.repository';
import { SystemTypeCodeMap } from '../maps/system-type-code.map';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

describe('SystemTypeCodeController', () => {
  let controller: SystemTypeCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      controllers: [SystemTypeCodeController],
      providers: [
        SystemTypeCodeService,
        SystemTypeCodeRepository,
        SystemTypeCodeMap,
      ],
    }).compile();

    controller = module.get<SystemTypeCodeController>(SystemTypeCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
