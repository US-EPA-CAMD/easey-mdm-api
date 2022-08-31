import { BadGatewayException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

import { RelationshipsService } from './relationships.service';
import { SpansRelationshipsRepository } from './spans-relationships.repository';
import { FormulaRelationshipsRepository } from './formula-relationships.repository';
import { DefaultsRelationshipsRepository } from './defaults-relationships.repository';
import { MatsMethodsRelationshipsRepository } from './mats-methods-relationships.repository';
import { MethodsRelationshipsRepository } from './methods-relationships.repository';
import { LoadsRelationshipsRepository } from './loads-relationships.repository';
import { QualLeeRelationshipsRepository } from './qual-lee-relationships.repository';
import { SystemFuelFlowRelationshipsRepository } from './system-fuel-flow-relationships.repository';
import { UnitControlRelationshipsRepository } from './unit-control-relationships.repository';
import { UnitFuelRelationshipsRepository } from './unit-fuel-relationships.repository';
import { SystemComponentRelationshipsRepository } from './system-component-relationships.repository';
import { TestSummaryRelationshipsRepository } from './test-summary-relationships.repository';

const mockFormulaRelationshipsRepository = () => ({
  getFormulaRelationships: jest
    .fn()
    .mockReturnValueOnce([])
    .mockRejectedValueOnce(() => {
      throw new BadGatewayException();
    }),
  findOne: jest.fn(),
});

const mockSpansRelationshipsRepository = () => ({
  getSpansRelationships: jest
    .fn()
    .mockReturnValueOnce([])
    .mockRejectedValueOnce(() => {
      throw new BadGatewayException();
    }),

  findOne: jest.fn(),
});

const mockDefaultsRelationshipsRepository = () => ({
  getDefaultsRelationships: jest
    .fn()
    .mockReturnValueOnce([])
    .mockRejectedValueOnce(() => {
      throw new BadGatewayException();
    }),

  findOne: jest.fn(),
});

const mockMatsMethodsRelationshipsRepository = () => ({
  getMatsMethodsRelationships: jest
    .fn()
    .mockReturnValueOnce([])
    .mockRejectedValueOnce(() => {
      throw new BadGatewayException();
    }),

  findOne: jest.fn(),
});

const mockMethodsRelationshipsRepository = () => ({
  getMethodsRelationships: jest
    .fn()
    .mockReturnValueOnce([])
    .mockRejectedValueOnce(() => {
      throw new BadGatewayException();
    }),

  findOne: jest.fn(),
});

const mockLoadsRelationshipsRepository = () => ({
  getLoadsRelationships: jest
    .fn()
    .mockReturnValueOnce([])
    .mockRejectedValueOnce(() => {
      throw new BadGatewayException();
    }),

  findOne: jest.fn(),
});

const mockQualLeeRelationshipsRepository = () => ({
  getQualLeeRelationships: jest
    .fn()
    .mockReturnValueOnce([])
    .mockRejectedValueOnce(() => {
      throw new BadGatewayException();
    }),

  findOne: jest.fn(),
});

const mockSystemFuelFlowRelationshipsRepository = () => ({
  getSystemFuelFlowRelationships: jest
    .fn()
    .mockReturnValueOnce([])
    .mockRejectedValueOnce(() => {
      throw new BadGatewayException();
    }),

  findOne: jest.fn(),
});

const mockUnitControlRelationshipsRepository = () => ({
  getUnitControlRelationships: jest
    .fn()
    .mockReturnValueOnce([])
    .mockRejectedValueOnce(() => {
      throw new BadGatewayException();
    }),

  findOne: jest.fn(),
});

const mockUnitFuelRelationshipsRepository = () => ({
  getUnitFuelRelationships: jest
    .fn()
    .mockReturnValueOnce([])
    .mockRejectedValueOnce(() => {
      throw new BadGatewayException();
    }),

  findOne: jest.fn(),
});

const mockSystemComponentRelationshipsRepository = () => ({
  getSystemComponentRelationships: jest
    .fn()
    .mockReturnValueOnce([])
    .mockRejectedValueOnce(() => {
      throw new BadGatewayException();
    }),

  findOne: jest.fn(),
});

describe('RelationshipsService', () => {
  let service: RelationshipsService;
  let fRRepository: FormulaRelationshipsRepository;
  let sRRepository: SpansRelationshipsRepository;
  let dRRepository: DefaultsRelationshipsRepository;
  let mMRRepository: MatsMethodsRelationshipsRepository;
  let mRRepository: MethodsRelationshipsRepository;
  let lRRepository: LoadsRelationshipsRepository;
  let qlRRepository: QualLeeRelationshipsRepository;
  let sffRRepository: SystemFuelFlowRelationshipsRepository;
  let ucRRepository: UnitControlRelationshipsRepository;
  let ufRRepository: UnitFuelRelationshipsRepository;
  let scRRepository: SystemComponentRelationshipsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        RelationshipsService,
        {
          provide: FormulaRelationshipsRepository,
          useFactory: mockFormulaRelationshipsRepository,
        },
        {
          provide: SpansRelationshipsRepository,
          useFactory: mockSpansRelationshipsRepository,
        },
        {
          provide: DefaultsRelationshipsRepository,
          useFactory: mockDefaultsRelationshipsRepository,
        },
        {
          provide: MatsMethodsRelationshipsRepository,
          useFactory: mockMatsMethodsRelationshipsRepository,
        },
        {
          provide: MethodsRelationshipsRepository,
          useFactory: mockMethodsRelationshipsRepository,
        },
        {
          provide: LoadsRelationshipsRepository,
          useFactory: mockLoadsRelationshipsRepository,
        },
        {
          provide: QualLeeRelationshipsRepository,
          useFactory: mockQualLeeRelationshipsRepository,
        },
        {
          provide: SystemFuelFlowRelationshipsRepository,
          useFactory: mockSystemFuelFlowRelationshipsRepository,
        },
        {
          provide: UnitControlRelationshipsRepository,
          useFactory: mockUnitControlRelationshipsRepository,
        },
        {
          provide: UnitFuelRelationshipsRepository,
          useFactory: mockUnitFuelRelationshipsRepository,
        },
        {
          provide: SystemComponentRelationshipsRepository,
          useFactory: mockSystemComponentRelationshipsRepository,
        },
        {
          provide: TestSummaryRelationshipsRepository,
          useFactory: () => ({}),
        },
      ],
    }).compile();

    service = module.get<RelationshipsService>(RelationshipsService);

    fRRepository = module.get<FormulaRelationshipsRepository>(
      FormulaRelationshipsRepository,
    );
    sRRepository = module.get<SpansRelationshipsRepository>(
      SpansRelationshipsRepository,
    );
    dRRepository = module.get<DefaultsRelationshipsRepository>(
      DefaultsRelationshipsRepository,
    );
    mMRRepository = module.get<MatsMethodsRelationshipsRepository>(
      MatsMethodsRelationshipsRepository,
    );
    mRRepository = module.get<MethodsRelationshipsRepository>(
      MethodsRelationshipsRepository,
    );
    lRRepository = module.get<LoadsRelationshipsRepository>(
      LoadsRelationshipsRepository,
    );
    qlRRepository = module.get<QualLeeRelationshipsRepository>(
      QualLeeRelationshipsRepository,
    );
    sffRRepository = module.get<SystemFuelFlowRelationshipsRepository>(
      SystemFuelFlowRelationshipsRepository,
    );
    ucRRepository = module.get<UnitControlRelationshipsRepository>(
      UnitControlRelationshipsRepository,
    );
    ufRRepository = module.get<UnitFuelRelationshipsRepository>(
      UnitFuelRelationshipsRepository,
    );
    scRRepository = module.get<SystemComponentRelationshipsRepository>(
      SystemComponentRelationshipsRepository,
    );
  });

  describe('getFormulaRelationships', () => {
    it('calls the getFormulaRelationships method and returns formula master data relationships', async () => {
      const result = await service.getFormulaRelationships();
      expect(result).toEqual([]);
      expect(fRRepository.getFormulaRelationships).toHaveBeenCalled();
      const fail = await service.getFormulaRelationships();
    });
  });

  describe('getSpansRelationships', () => {
    it('calls the getSpansRelationships method and returns span master data relationships', async () => {
      const result = await service.getSpansRelationships();
      expect(result).toEqual([]);
      expect(sRRepository.getSpansRelationships).toHaveBeenCalled();
      const fail = await service.getSpansRelationships();
    });
  });

  describe('getDefaultsRelationships', () => {
    it('calls the getDefaultsRelationships method and returns defaults master data relationships', async () => {
      const result = await service.getDefaultsRelationships();
      expect(result).toEqual([]);
      expect(dRRepository.getDefaultsRelationships).toHaveBeenCalled();
      const fail = await service.getDefaultsRelationships();
    });
  });

  describe('getMatsMethodsRelationships', () => {
    it('calls the getMatsMethodsRelationships method and returns mats-methods master data relationships', async () => {
      const result = await service.getMatsMethodsRelationships();
      expect(result).toEqual([]);
      expect(mMRRepository.getMatsMethodsRelationships).toHaveBeenCalled();
      const fail = await service.getMatsMethodsRelationships();
      expect(mMRRepository.getMatsMethodsRelationships).toHaveBeenCalledTimes(
        2,
      );
    });
  });

  describe('getMethodsRelationships', () => {
    it('calls the getMethodsRelationships method and returns mats-methods master data relationships', async () => {
      const result = await service.getMethodsRelationships();
      expect(result).toEqual([]);
      expect(mRRepository.getMethodsRelationships).toHaveBeenCalled();
      const fail = await service.getMethodsRelationships();
      expect(mRRepository.getMethodsRelationships).toHaveBeenCalledTimes(2);
    });
  });

  describe('getMatsMethodsRelationships', () => {
    it('calls the getMatsMethodsRelationships method and returns mats-methods master data relationships', async () => {
      const result = await service.getMatsMethodsRelationships();
      expect(result).toEqual([]);
      expect(mMRRepository.getMatsMethodsRelationships).toHaveBeenCalled();
      const fail = await service.getMatsMethodsRelationships();
      expect(mMRRepository.getMatsMethodsRelationships).toHaveBeenCalledTimes(
        2,
      );
    });
  });

  describe('getLoadsRelationships', () => {
    it('calls the getLoadsRelationships method and returns loads master data relationships', async () => {
      const result = await service.getLoadsRelationships();
      expect(result).toEqual([]);
      expect(lRRepository.getLoadsRelationships).toHaveBeenCalled();
      const fail = await service.getLoadsRelationships();
      expect(lRRepository.getLoadsRelationships).toHaveBeenCalledTimes(2);
    });
  });

  describe('getQualLeeRelationships', () => {
    it('calls the getQualLeeRelationships method and returns LEE qualifications master data relationships', async () => {
      const result = await service.getQualLeeRelationships();
      expect(result).toEqual([]);
      expect(qlRRepository.getQualLeeRelationships).toHaveBeenCalled();
      const fail = await service.getQualLeeRelationships();
      expect(qlRRepository.getQualLeeRelationships).toHaveBeenCalledTimes(2);
    });
  });

  describe('getSystemFuelFlowRelationships', () => {
    it('calls the getSystemFuelFlowRelationships method and returns system fuel flow master data relationships', async () => {
      const result = await service.getSystemFuelFlowRelationships();
      expect(result).toEqual([]);
      expect(sffRRepository.getSystemFuelFlowRelationships).toHaveBeenCalled();
      const fail = await service.getSystemFuelFlowRelationships();
      expect(
        sffRRepository.getSystemFuelFlowRelationships,
      ).toHaveBeenCalledTimes(2);
    });
  });

  describe('getUnitControlRelationships', () => {
    it('calls the getUnitControlRelationships method and returns unit control master data relationships', async () => {
      const result = await service.getUnitControlRelationships();
      expect(result).toEqual([]);
      expect(ucRRepository.getUnitControlRelationships).toHaveBeenCalled();
      const fail = await service.getUnitControlRelationships();
      expect(ucRRepository.getUnitControlRelationships).toHaveBeenCalledTimes(
        2,
      );
    });
  });

  describe('getUnitFuelRelationships', () => {
    it('calls the getUnitFuelRelationships method and returns unit fuel master data relationships', async () => {
      const result = await service.getUnitFuelRelationships();
      expect(result).toEqual([]);
      expect(ufRRepository.getUnitFuelRelationships).toHaveBeenCalled();
      const fail = await service.getUnitFuelRelationships();
      expect(ufRRepository.getUnitFuelRelationships).toHaveBeenCalledTimes(2);
    });
  });

  describe('getSystemComponentRelationships', () => {
    it('calls the getSystemComponentRelationships method and returns system component master data relationships', async () => {
      const result = await service.getSystemComponentRelationships();
      expect(result).toEqual([]);
      expect(scRRepository.getSystemComponentRelationships).toHaveBeenCalled();
      const fail = await service.getSystemComponentRelationships();
      expect(
        scRRepository.getSystemComponentRelationships,
      ).toHaveBeenCalledTimes(2);
    });
  });
});
