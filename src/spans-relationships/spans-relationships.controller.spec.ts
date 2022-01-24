import { Test, TestingModule } from '@nestjs/testing';
import { SpansRelationshipsController } from './spans-relationships.controller';
import { SpansRelationshipsService } from './spans-relationships.service';

const mockSpansRelationshipsService = () => ({
  getSpansRelationships: jest.fn(() => []),
});

describe('SpansRelationshipsController', () => {
  let controller: SpansRelationshipsController;
  let service: SpansRelationshipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpansRelationshipsController],
      providers: [
        {
          provide: SpansRelationshipsService,
          useFactory: mockSpansRelationshipsService,
        },
      ],
    }).compile();

    controller = module.get<SpansRelationshipsController>(
      SpansRelationshipsController,
    );
    service = module.get<SpansRelationshipsService>(SpansRelationshipsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('getSpansRelationships', () => {
    it('should call the SpansRelationshipsService and return a list of span master data relationships', () => {
      expect(controller.getSpansRelationships()).toEqual([]);
      expect(service.getSpansRelationships).toHaveBeenCalled();
    });
  });
});
