import { Test, TestingModule } from '@nestjs/testing';
import { DefaultsRelationshipsController } from './defaults-relationships.controller';

describe('DefaultsRelationshipsController', () => {
  let controller: DefaultsRelationshipsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefaultsRelationshipsController],
    }).compile();

    controller = module.get<DefaultsRelationshipsController>(DefaultsRelationshipsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
