import { Test } from '@nestjs/testing';

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

const mockRepository = () => ({
  find: jest.fn(),
});

describe('RelationshipService', () => {
  let frRepository: any;
  let srRepository: any;
  let drRepository: any;
  let mmrRepository: any;
  let mrRepository: any;
  let lrRepository: any;
  let qlrRepository: any;
  let sffrRepository: any;
  let ucrRepository: any;
  let ufrRepository: any;
  let scrRepository: any;
  let tsrRepository: any;
  let service: RelationshipsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        RelationshipsService,
        {
          provide: FormulaRelationshipsRepository,
          useFactory: mockRepository,
        },
        {
          provide: SpansRelationshipsRepository,
          useFactory: mockRepository,
        },
        {
          provide: DefaultsRelationshipsRepository,
          useFactory: mockRepository,
        },
        {
          provide: MatsMethodsRelationshipsRepository,
          useFactory: mockRepository,
        },
        {
          provide: MethodsRelationshipsRepository,
          useFactory: mockRepository,
        },
        {
          provide: LoadsRelationshipsRepository,
          useFactory: mockRepository,
        },
        {
          provide: QualLeeRelationshipsRepository,
          useFactory: mockRepository,
        },
        {
          provide: SystemFuelFlowRelationshipsRepository,
          useFactory: mockRepository,
        },
        {
          provide: UnitControlRelationshipsRepository,
          useFactory: mockRepository,
        },
        {
          provide: UnitFuelRelationshipsRepository,
          useFactory: mockRepository,
        },
        {
          provide: SystemComponentRelationshipsRepository,
          useFactory: mockRepository,
        },
        {
          provide: TestSummaryRelationshipsRepository,
          useFactory: mockRepository,
        },
      ],
    }).compile();

    service = module.get(RelationshipsService);
    frRepository = module.get(FormulaRelationshipsRepository);
    srRepository = module.get(SpansRelationshipsRepository);
    drRepository = module.get(DefaultsRelationshipsRepository);
    mmrRepository = module.get(MatsMethodsRelationshipsRepository);
    mrRepository = module.get(MethodsRelationshipsRepository);
    lrRepository = module.get(LoadsRelationshipsRepository);
    qlrRepository = module.get(QualLeeRelationshipsRepository);
    sffrRepository = module.get(SystemFuelFlowRelationshipsRepository);
    ucrRepository = module.get(UnitControlRelationshipsRepository);
    ufrRepository = module.get(UnitFuelRelationshipsRepository);
    scrRepository = module.get(SystemComponentRelationshipsRepository);
    tsrRepository = module.get(TestSummaryRelationshipsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(frRepository).toBeDefined();
    expect(srRepository).toBeDefined();
    expect(drRepository).toBeDefined();
    expect(mmrRepository).toBeDefined();
    expect(mrRepository).toBeDefined();
    expect(lrRepository).toBeDefined();
    expect(qlrRepository).toBeDefined();
    expect(sffrRepository).toBeDefined();
    expect(ucrRepository).toBeDefined();
    expect(ufrRepository).toBeDefined();
    expect(scrRepository).toBeDefined();
    expect(tsrRepository).toBeDefined();
  });

  describe('getFormulaRelationships', () => {

    it('should return a list of Formula Master Data relationships', async () => {
      frRepository.find.mockResolvedValue([]);
      const results = await service.getFormulaRelationships();

      expect(frRepository.find).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });

  describe('getSpansRelationships', () => {

    it('should return a list of Span Master Data relationships', async () => {
      srRepository.find.mockResolvedValue([]);
      const results = await service.getSpansRelationships();

      expect(srRepository.find).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });

  describe('getDefaultsRelationships', () => {

    it('should return a list of Default Master Data relationships', async () => {
      drRepository.find.mockResolvedValue([]);
      const results = await service.getDefaultsRelationships();

      expect(drRepository.find).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });

  describe('getMethodsRelationships', () => {

    it('should return a list of Method Master Data relationships', async () => {
      mrRepository.find.mockResolvedValue([]);
      const results = await service.getMethodsRelationships();

      expect(mrRepository.find).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });

  describe('getMatsMethodsRelationships', () => {

    it('should return a list of MATS Method Master Data relationships', async () => {
      mmrRepository.find.mockResolvedValue([]);
      const results = await service.getMatsMethodsRelationships();

      expect(mmrRepository.find).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });

  describe('getLoadsRelationships', () => {

    it('should return a list of Load Master Data relationships', async () => {
      lrRepository.find.mockResolvedValue([]);
      const results = await service.getLoadsRelationships();

      expect(lrRepository.find).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });

  describe('getQualLeeRelationships', () => {

    it('should return a list of LEE Qualification Master Data relationships', async () => {
      qlrRepository.find.mockResolvedValue([]);
      const results = await service.getQualLeeRelationships();

      expect(qlrRepository.find).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });

  describe('getSystemFuelFlowRelationships', () => {

    it('should return a list of SystemFuelFlow Master Data relationships', async () => {
      sffrRepository.find.mockResolvedValue([]);
      const results = await service.getSystemFuelFlowRelationships();

      expect(sffrRepository.find).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });

  describe('getUnitControlRelationships', () => {

    it('should return a list of Unit Control Master Data relationships', async () => {
      ucrRepository.find.mockResolvedValue([]);
      const results = await service.getUnitControlRelationships();

      expect(ucrRepository.find).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });

  describe('getUnitFuelRelationships', () => {

    it('should return a list of Unit Fuel Master Data relationships', async () => {
      ufrRepository.find.mockResolvedValue([]);
      const results = await service.getUnitFuelRelationships();

      expect(ufrRepository.find).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });

  describe('getSystemComponentRelationships', () => {

    it('should return a list of System Component Master Data relationships', async () => {
      scrRepository.find.mockResolvedValue([]);
      const results = await service.getSystemComponentRelationships();

      expect(scrRepository.find).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });

  describe('getTestSummaryRelationships', () => {

    it('should return a list of Test Summary Master Data relationships', async () => {
      tsrRepository.find.mockResolvedValue([]);
      const results = await service.getTestSummaryRelationships();

      expect(tsrRepository.find).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });
});
