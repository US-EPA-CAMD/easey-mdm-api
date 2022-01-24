import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { SpansRelationshipsRepository } from './spans-relationships.repository';
import { SpansRelationshipsService } from './spans-relationships.service';

const mockSpansRelationshipsRepository = () => ({
  getSpansRelationships: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('SpansRelationshipsService', () => {
  let service: SpansRelationshipsService;
  let repository: SpansRelationshipsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        SpansRelationshipsService,
        {
          provide: SpansRelationshipsRepository,
          useFactory: mockSpansRelationshipsRepository,
        },
      ],
    }).compile();

    service = module.get<SpansRelationshipsService>(SpansRelationshipsService);
    repository = module.get<SpansRelationshipsRepository>(
      SpansRelationshipsRepository,
    );
  });

  describe('getSpansRelationships', () => {
    it('calls the getSpansRelationships method in SpansRelationshipsRepository and returns span master data relationships', async () => {
      const result = await service.getSpansRelationships();
      expect(result).toEqual([]);
      expect(repository.getSpansRelationships).toHaveBeenCalled();
    });
  });
});
