import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { ControlEquipParamCodeRepository } from './control-equip-param-code.repository';
import { ControlEquipParamCodeService } from './control-equip-param-code.service';

const mockControlEquipParamCodeRepository = () => ({
  getControlEquipParamCodes: jest.fn(() => []),
});

describe('ControlEquipParamCodeService', () => {
  let service: ControlEquipParamCodeService;
  let repository: ControlEquipParamCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        ControlEquipParamCodeService,
        {
          provide: ControlEquipParamCodeRepository,
          useFactory: mockControlEquipParamCodeRepository,
        },
      ],
    }).compile();

    service = module.get<ControlEquipParamCodeService>(
      ControlEquipParamCodeService,
    );
    repository = module.get<ControlEquipParamCodeRepository>(
      ControlEquipParamCodeRepository,
    );
  });

  describe('getControlEquipParamCodes', () => {
    it('should call the ControlEquipParamCodeRepository.getControlEquipParamCodes() and return a list of control equipment parameter codes', async () => {
      const result = await service.getControlEquipParamCodes();
      expect(result).toEqual([]);
      expect(repository.getControlEquipParamCodes).toHaveBeenCalled();
    });
  });
});
