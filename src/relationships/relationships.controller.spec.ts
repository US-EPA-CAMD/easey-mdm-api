import { Test, TestingModule } from '@nestjs/testing';
import { RelationshipsController } from './relationships.controller';
import { RelationshipsService } from './relationships.service';

const mockSpansRelationshipsService = () => ({
  getSpanRelationships: jest.fn(() => []),
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

  describe('getSpanRelationships', () => {
    it('should call the RelationshipsService and return a list of span master data relationships', () => {
      expect(controller.getSpanRelationships()).toEqual([]);
      expect(service.getSpanRelationships).toHaveBeenCalled();
    });
  });
});
