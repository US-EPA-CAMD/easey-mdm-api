import { Test, TestingModule } from '@nestjs/testing';
import { RelationshipsController } from './relationships.controller';
import { RelationshipsService } from './relationships.service';

const mockSpansRelationshipsService = () => ({
  getSpansRelationships: jest.fn(() => []),
  getFormulaRelationships: jest.fn(() => []),
  getDefaultsRelationships: jest.fn(() => []),
  getMatsMethodsRelationships: jest.fn(() => []),
  getMethodsRelationships: jest.fn(() => []),
  getLoadsRelationships: jest.fn(() => []),
  getQualLeeRelationships: jest.fn(() => []),
  getSystemFuelFlowRelationships: jest.fn(() => []),
  getUnitControlRelationships: jest.fn(() => []),
});

describe('RelationshipsController', () => {
  let controller: RelationshipsController;
  let service: RelationshipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelationshipsController],
      providers: [
        {
          provide: RelationshipsService,
          useFactory: mockSpansRelationshipsService,
        },
      ],
    }).compile();

    controller = module.get<RelationshipsController>(RelationshipsController);
    service = module.get<RelationshipsService>(RelationshipsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('getSpansRelationships', () => {
    it('should call the RelationshipsService and return a list of span master data relationships', () => {
      expect(controller.getSpansRelationships()).toEqual([]);
      expect(service.getSpansRelationships).toHaveBeenCalled();
    });
  });

  describe('getFormulaRelationships', () => {
    it('should call the RelationshipsService and return a list of formula master data relationships', () => {
      expect(controller.getFormulaRelationships()).toEqual([]);
      expect(service.getFormulaRelationships).toHaveBeenCalled();
    });
  });

  describe('getDefaultsRelationships', () => {
    it('should call the RelationshipsService and return a list of defaults master data relationships', () => {
      expect(controller.getDefaultsRelationships()).toEqual([]);
      expect(service.getDefaultsRelationships).toHaveBeenCalled();
    });
  });

  describe('getMatsMethodsRelationships', () => {
    it('should call the RelationshipsService and return a list of mats methods master data relationships', () => {
      expect(controller.getMatsMethodsRelationships()).toEqual([]);
      expect(service.getMatsMethodsRelationships).toHaveBeenCalled();
    });
  });

  describe('getMethodsRelationships', () => {
    it('should call the RelationshipsService and return a list of methods master data relationships', () => {
      expect(controller.getMethodsRelationships()).toEqual([]);
      expect(service.getMethodsRelationships).toHaveBeenCalled();
    });
  });

  describe('getLoadsRelationships', () => {
    it('should call the RelationshipsService and return a list of loads master data relationships', () => {
      expect(controller.getLoadsRelationships()).toEqual([]);
      expect(service.getLoadsRelationships).toHaveBeenCalled();
    });
  });

  describe('getQualLeeRelationships', () => {
    it('should call the RelationshipsService and return a list of LEE qualifications master data relationships', () => {
      expect(controller.getQualLeeRelationships()).toEqual([]);
      expect(service.getQualLeeRelationships).toHaveBeenCalled();
    });
  });

  describe('getSystemFuelFlowRelationships', () => {
    it('should call the RelationshipsService and return a list of system fuel flow master data relationships', () => {
      expect(controller.getSystemFuelFlowRelationships()).toEqual([]);
      expect(service.getSystemFuelFlowRelationships).toHaveBeenCalled();
    });
  });

  describe('getUnitControlRelationships', () => {
    it('should call the RelationshipsService and return a list of unit control master data relationships', () => {
      expect(controller.getUnitControlRelationships()).toEqual([]);
      expect(service.getUnitControlRelationships).toHaveBeenCalled();
    });
  });
});
