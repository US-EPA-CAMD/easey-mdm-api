import { Test, TestingModule } from '@nestjs/testing';

import { BasisCodeController } from './basis-code.controller';
import { BasisCodeService } from './basis-code.service';
import { BasisCodeRepository } from './basis-code.repository';
import { BasisCodeMap } from '../maps/basis-code.map';

describe('BasisCodeController', () => {
  let controller: BasisCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasisCodeController],
      providers: [BasisCodeService, BasisCodeRepository, BasisCodeMap],
    }).compile();

    controller = module.get<BasisCodeController>(BasisCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
