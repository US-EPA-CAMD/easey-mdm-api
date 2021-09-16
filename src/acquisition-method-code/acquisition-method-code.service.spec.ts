import { Test, TestingModule } from '@nestjs/testing';

import { AcquisitionMethodCodeService } from './acquisition-method-code.service';
import { AcquisitionMethodCodeRepository } from './acquisition-method-code.repository';
import { AcquisitionMethodCodeMap } from '../maps/acquistion-method-code.map';

describe('AcquisitionMethodCodeService', () => {
  let mockAquisitionMethodCodeRepository = () => ({
    getAcquisitionMethodCodes: jest.fn(),
  });

  let service: AcquisitionMethodCodeService;
  let repository: AcquisitionMethodCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AcquisitionMethodCodeService,
        {
          provide: AcquisitionMethodCodeRepository,
          useFactory: mockAquisitionMethodCodeRepository,
        },
        AcquisitionMethodCodeMap,
      ],
    }).compile();

    service = module.get<AcquisitionMethodCodeService>(
      AcquisitionMethodCodeService,
    );
    repository = module.get<AcquisitionMethodCodeRepository>(
      AcquisitionMethodCodeRepository,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
