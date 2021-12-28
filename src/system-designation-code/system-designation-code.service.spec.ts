import { Test, TestingModule } from '@nestjs/testing';

import { SystemDesignationCodeService } from './system-designation-code.service';
import { SystemDesignationCodeRepository } from './system-designation-code.repository';
import { SystemDesignationCodeMap } from '../maps/system-designation-code.map';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

describe('SystemDesignationCodeService', () => {
  let mockSystemDesignationCodeRepository = () => ({
    getSystemDesignationCodes: jest.fn(),
  });
  let service: SystemDesignationCodeService;
  let repository: SystemDesignationCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        SystemDesignationCodeService,
        {
          provide: SystemDesignationCodeRepository,
          useFactory: mockSystemDesignationCodeRepository,
        },
        SystemDesignationCodeMap,
      ],
    }).compile();

    service = module.get<SystemDesignationCodeService>(
      SystemDesignationCodeService,
    );
    repository = module.get<SystemDesignationCodeRepository>(
      SystemDesignationCodeRepository,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
