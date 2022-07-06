import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { GasTypeCode } from '../entities/gas-type-code.entity';
import { GasTypeCodeRepository } from './gas-type-code.repository';
import { GasTypeCodeService } from './gas-type-code.service';

const gasTypeCode = new GasTypeCode();
const mockRepository = () => ({
  getGasTypeCodes: jest.fn().mockResolvedValue([gasTypeCode]),
});

describe('GasTypeCodeService', () => {
  let service: GasTypeCodeService;
  let repository: GasTypeCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        GasTypeCodeService,
        {
          provide: GasTypeCodeRepository,
          useFactory: mockRepository,
        },
      ],
    }).compile();

    service = module.get<GasTypeCodeService>(GasTypeCodeService);
    repository = module.get<GasTypeCodeRepository>(GasTypeCodeRepository);
  });

  describe('getGasTypeCodes', () => {
    it('calls the GasTypeCodeRepository and return gas type codes', async () => {
      const result = await service.getGasTypeCodes();
      expect(result).toEqual([gasTypeCode]);
      expect(repository.getGasTypeCodes).toHaveBeenCalled();
    });

    it('calls the GasTypeCodeRepository and return gas type codes', async () => {
      jest.spyOn(repository, 'getGasTypeCodes').mockRejectedValue(null);

      let errored = false;

      try {
        await service.getGasTypeCodes();
      } catch (e) {
        errored = true;
      }

      expect(errored).toEqual(true);
      expect(repository.getGasTypeCodes).toHaveBeenCalled();
    });
  });
});
