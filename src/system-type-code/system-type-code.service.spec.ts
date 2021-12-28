import { Test, TestingModule } from '@nestjs/testing';

import { SystemTypeCodeService } from './system-type-code.service';
import { SystemTypeCodeRepository } from './system-type-code.repository';
import { SystemTypeCodeMap } from '../maps/system-type-code.map';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

describe('SystemTypeCodeService', () => {
  let mockSystemTypeCodeRepository = () => ({
    getSystemTypeCodes: jest.fn(),
  });
  let service: SystemTypeCodeService;
  let repository: SystemTypeCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        SystemTypeCodeService,
        {
          provide: SystemTypeCodeRepository,
          useFactory: mockSystemTypeCodeRepository,
        },
        SystemTypeCodeMap,
      ],
    }).compile();

    service = module.get<SystemTypeCodeService>(SystemTypeCodeService);
    repository = module.get<SystemTypeCodeRepository>(SystemTypeCodeRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
