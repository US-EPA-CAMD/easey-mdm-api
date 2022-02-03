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
import { UnitControlRelationshipsRepository } from './unit-control-relationships.repository';

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

const mockUnitControlRelationshipsRepository = () => ({
  getUnitControlRelationships: jest
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
  let ucRRepository: UnitControlRelationshipsRepository;

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
          provide: UnitControlRelationshipsRepository,
          useFactory: mockUnitControlRelationshipsRepository,
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
    ucRRepository = module.get<UnitControlRelationshipsRepository>(
      UnitControlRelationshipsRepository,
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
});
