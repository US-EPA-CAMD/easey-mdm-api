import { Test, TestingModule } from '@nestjs/testing';

import { BasisCodeService } from './basis-code.service';
import { BasisCodeRepository } from './basis-code.repository';
import { BasisCodeMap } from '../maps/basis-code.map';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

describe('BasisCodeService', () => {
  let mockBasisCodeRepository = () => ({
    getBasisCodes: jest.fn(),
  });
  let service: BasisCodeService;
  let repository: BasisCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        BasisCodeService,
        {
          provide: BasisCodeRepository,
          useFactory: mockBasisCodeRepository,
        },
        BasisCodeMap,
      ],
    }).compile();

    service = module.get<BasisCodeService>(BasisCodeService);
    repository = module.get<BasisCodeRepository>(BasisCodeRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
