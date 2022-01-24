import { Test, TestingModule } from '@nestjs/testing';
import { FormulaRelationshipsDataCodeService } from './relationships.service';

describe('FormulaRelationshipsDataCodeService', () => {
  let service: FormulaRelationshipsDataCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormulaRelationshipsDataCodeService],
    }).compile();

    service = module.get<FormulaRelationshipsDataCodeService>(
      FormulaRelationshipsDataCodeService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
