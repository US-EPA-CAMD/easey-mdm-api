import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { SpansRelationshipsRepository } from './spans-relationships.repository';
import { RelationshipsService } from './relationships.service';
import { FormulaRelationshipsRepository } from './formula-relationships.repository';
import { DefaultsRelationshipsRepository } from './defaults-relationships.repository';

const mockFormulaRelationshipsRepository = () => ({
  getFormulaRelationships: jest.fn(() => []),
  findOne: jest.fn(),
});

const mockSpansRelationshipsRepository = () => ({
  getSpansRelationships: jest.fn(() => []),
  findOne: jest.fn(),
});

const mockDefaultsRelationshipsRepository = () => ({
  getDefaultsRelationships: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('RelationshipsService', () => {
  let service: RelationshipsService;
  let fRRepository: FormulaRelationshipsRepository;
  let sRRepository: SpansRelationshipsRepository;
  let dRRepository: DefaultsRelationshipsRepository;

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
  });

  describe('getFormulaRelationships', () => {
    it('calls the getFormulaRelationships method and returns formula master data relationships', async () => {
      const result = await service.getFormulaRelationships();
      expect(result).toEqual([]);
      expect(fRRepository.getFormulaRelationships).toHaveBeenCalled();
    });
  });

  describe('getSpansRelationships', () => {
    it('calls the getSpansRelationships method and returns span master data relationships', async () => {
      const result = await service.getSpanRelationships();
      expect(result).toEqual([]);
      expect(sRRepository.getSpansRelationships).toHaveBeenCalled();
    });
  });

  describe('getDefaultsRelationships', () => {
    it('calls the getDefaultsRelationships method and returns defaults master data relationships', async () => {
      const result = await service.getDefaultsRelationships();
      expect(result).toEqual([]);
      expect(dRRepository.getDefaultsRelationships).toHaveBeenCalled();
    });
  });
});
