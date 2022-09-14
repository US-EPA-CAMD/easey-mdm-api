import { Test, TestingModule } from '@nestjs/testing';

import { AcquisitionMethodCodeService } from './acquisition-method-code.service';
import { AcquisitionMethodCodeRepository } from './acquisition-method-code.repository';
import { AcquisitionMethodCodeMap } from '../maps/acquistion-method-code.map';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

describe('AcquisitionMethodCodeService', () => {
  let mockAquisitionMethodCodeRepository = () => ({
    getAcquisitionMethodCodes: jest.fn(() => []),
  });

  let service: AcquisitionMethodCodeService;
  let repository: AcquisitionMethodCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, LoggerModule],
      providers: [
        AcquisitionMethodCodeService,
        {
          provide: AcquisitionMethodCodeRepository,
          useFactory: mockAquisitionMethodCodeRepository,
        },
        AcquisitionMethodCodeMap,
        ConfigService,
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
    expect(repository).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('getAcquisitionMethodCodes', () => {
    it('should call the AcquisitionMethodCodeRepository.getAcquisitionMethodCodes() and return a list of acquisition method codes', async () => {
      const result = await service.getAcquisitionMethodCodes();
      expect(result).toEqual([]);
      expect(repository.getAcquisitionMethodCodes).toHaveBeenCalled();
    });
  });
});