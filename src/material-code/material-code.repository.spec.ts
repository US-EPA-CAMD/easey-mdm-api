import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';
import { MaterialCodeDTO } from '../dto/material-code.dto';
import { MaterialCode } from '../entities/material-code.entity';
import { MaterialCodeRepository } from './material-code.repository';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('MaterialCodeRepository', () => {
  let repository: MaterialCodeRepository;
  let queryBuilder: any;
  const data = new MaterialCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        MaterialCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<MaterialCodeRepository>(MaterialCodeRepository);

    queryBuilder = module.get<SelectQueryBuilder<MaterialCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(new MaterialCodeDTO());
  });

  describe('getMaterialCodes', () => {
    it('calls createQueryBuilder and gets all shape codes from the repository', async () => {
      let result = await repository.getMaterialCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });
});
