import { Test, TestingModule } from '@nestjs/testing';
import { GasLevelCodeRepository } from './gas-level-code.repository';
import { GasLevelCodeService } from './gas-level-code.service';

describe('GasLevelCodeService', () => {
  let service: GasLevelCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GasLevelCodeService,
        {
          provide: GasLevelCodeRepository,
          useFactory: () => ({}),
        },
      ],
    }).compile();

    service = module.get<GasLevelCodeService>(GasLevelCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
