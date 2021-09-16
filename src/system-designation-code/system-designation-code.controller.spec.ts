import { Test, TestingModule } from '@nestjs/testing';

import { SystemDesignationCodeController } from './system-designation-code.controller';
import { SystemDesignationCodeService } from './system-designation-code.service';
import { SystemDesignationCodeRepository } from './system-designation-code.repository';
import { SystemDesignationCodeMap } from '../maps/system-designation-code.map';

describe('SystemDesignationCodeController', () => {
  let controller: SystemDesignationCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemDesignationCodeController],
      providers: [
        SystemDesignationCodeService,
        SystemDesignationCodeRepository,
        SystemDesignationCodeMap,
      ],
    }).compile();

    controller = module.get<SystemDesignationCodeController>(
      SystemDesignationCodeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
