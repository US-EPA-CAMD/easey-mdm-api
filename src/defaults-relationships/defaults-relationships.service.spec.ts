import { Test, TestingModule } from '@nestjs/testing';
import { DefaultsRelationshipsService } from './defaults-relationships.service';

describe('DefaultsRelationshipsService', () => {
  let service: DefaultsRelationshipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefaultsRelationshipsService],
    }).compile();

    service = module.get<DefaultsRelationshipsService>(
      DefaultsRelationshipsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
