import { Test, TestingModule } from '@nestjs/testing';
import { GasLevelCodeController } from './gas-level-code.controller';
import { GasLevelCodeService } from './gas-level-code.service';

describe('GasLevelCodeController', () => {
  let controller: GasLevelCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GasLevelCodeController],
      providers: [
        {
          provide: GasLevelCodeService,
          useFactory: () => ({}),
        },
      ],
    }).compile();

    controller = module.get<GasLevelCodeController>(GasLevelCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
