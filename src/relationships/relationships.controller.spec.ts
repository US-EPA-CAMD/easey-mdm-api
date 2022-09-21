import { Test } from '@nestjs/testing';

import { RelationshipsService } from './relationships.service';
import { RelationshipsController } from './relationships.controller';

const mockRelationshipsService = () => ({
  getSpansRelationships: jest.fn(() => []),
  getFormulaRelationships: jest.fn(() => []),
  getDefaultsRelationships: jest.fn(() => []),
  getMatsMethodsRelationships: jest.fn(() => []),
  getMethodsRelationships: jest.fn(() => []),
  getLoadsRelationships: jest.fn(() => []),
  getQualLeeRelationships: jest.fn(() => []),
  getSystemFuelFlowRelationships: jest.fn(() => []),
  getUnitControlRelationships: jest.fn(() => []),
  getUnitFuelRelationships: jest.fn(() => []),
  getSystemComponentRelationships: jest.fn(() => []),
  getTestSummaryRelationships: jest.fn(() => []),
});

describe('RelationshipsController', () => {
  let service: RelationshipsService;
  let controller: RelationshipsController;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [RelationshipsController],
      providers: [
        {
          provide: RelationshipsService,
          useFactory: mockRelationshipsService,
        },
      ],
    }).compile();

    service = module.get(RelationshipsService);
    controller = module.get(RelationshipsController);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });

  describe('getSpansRelationships', () => {
    
    it('should return a list of Span master data relationships', async () => {
      const expectedResult = [];

      jest.spyOn(
        service,
        'getSpansRelationships'
      ).mockResolvedValue(
        expectedResult
      );

      expect(
        await controller.getSpansRelationships()
      ).toBe(
        expectedResult
      );
    });

  });

  describe('getFormulaRelationships', () => {

    it('should return a list of Formula master data relationships', async () => {
      const expectedResult = [];

      jest.spyOn(
        service,
        'getFormulaRelationships'
      ).mockResolvedValue(
        expectedResult
      );

      expect(
        await controller.getFormulaRelationships()
      ).toBe(
        expectedResult
      );
    });

  });

  describe('getDefaultsRelationships', () => {

    it('should return a list of Default master data relationships', async () => {
      const expectedResult = [];

      jest.spyOn(
        service,
        'getDefaultsRelationships'
      ).mockResolvedValue(
        expectedResult
      );

      expect(
        await controller.getDefaultsRelationships()
      ).toBe(
        expectedResult
      );
    });

  });

  describe('getMatsMethodsRelationships', () => {

    it('should return a list of MATS Method master data relationships', async () => {
      const expectedResult = [];

      jest.spyOn(
        service,
        'getMatsMethodsRelationships'
      ).mockResolvedValue(
        expectedResult
      );

      expect(
        await controller.getMatsMethodsRelationships()
      ).toBe(
        expectedResult
      );
    });

  });

  describe('getMethodsRelationships', () => {

    it('should return a list of Method master data relationships', async () => {
      const expectedResult = [];

      jest.spyOn(
        service,
        'getMethodsRelationships'
      ).mockResolvedValue(
        expectedResult
      );

      expect(
        await controller.getMethodsRelationships()
      ).toBe(
        expectedResult
      );
    });

  });

  describe('getLoadsRelationships', () => {

    it('should return a list of Load master data relationships', async () => {
      const expectedResult = [];

      jest.spyOn(
        service,
        'getLoadsRelationships'
      ).mockResolvedValue(
        expectedResult
      );

      expect(
        await controller.getLoadsRelationships()
      ).toBe(
        expectedResult
      );
    });

  });

  describe('getQualLeeRelationships', () => {

    it('should return a list of LEE Qualification master data relationships', async () => {
      const expectedResult = [];

      jest.spyOn(
        service,
        'getQualLeeRelationships'
      ).mockResolvedValue(
        expectedResult
      );

      expect(
        await controller.getQualLeeRelationships()
      ).toBe(
        expectedResult
      );
    });

  });

  describe('getSystemFuelFlowRelationships', () => {

    it('should return a list of System Fuel Flow master data relationships', async () => {
      const expectedResult = [];

      jest.spyOn(
        service,
        'getSystemFuelFlowRelationships'
      ).mockResolvedValue(
        expectedResult
      );

      expect(
        await controller.getSystemFuelFlowRelationships()
      ).toBe(
        expectedResult
      );
    });

  });

  describe('getUnitControlRelationships', () => {

    it('should return a list of Unit Control master data relationships', async () => {
      const expectedResult = [];

      jest.spyOn(
        service,
        'getUnitControlRelationships'
      ).mockResolvedValue(
        expectedResult
      );

      expect(
        await controller.getUnitControlRelationships()
      ).toBe(
        expectedResult
      );
    });

  });

  describe('getUnitFuelRelationships', () => {

    it('should return a list of Unit Fuel master data relationships', async () => {
      const expectedResult = [];

      jest.spyOn(
        service,
        'getUnitFuelRelationships'
      ).mockResolvedValue(
        expectedResult
      );

      expect(
        await controller.getUnitFuelRelationships()
      ).toBe(
        expectedResult
      );
    });

  });

  describe('getSytemComponentRelationships', () => {

    it('should return a list of Sytem Component master data relationships', async () => {
      const expectedResult = [];

      jest.spyOn(
        service,
        'getSystemComponentRelationships'
      ).mockResolvedValue(
        expectedResult
      );

      expect(
        await controller.getSystemComponentRelationships()
      ).toBe(
        expectedResult
      );
    });

  });

  describe('getTestSummaryRelationships', () => {

    it('should return a list of Test Summary master data relationships', async () => {
      const expectedResult = [];

      jest.spyOn(
        service,
        'getTestSummaryRelationships'
      ).mockResolvedValue(
        expectedResult
      );

      expect(
        await controller.getTestSummaryRelationships()
      ).toBe(
        expectedResult
      );
    });

  });
});
