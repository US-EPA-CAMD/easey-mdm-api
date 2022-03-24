import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';
import { ShapeCodeDTO } from '../dto/shape-code.dto';
import { ShapeCode } from '../entities/shape-code.entity';
import { ShapeCodeRepository } from './shape-code.repository';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('ShapeCodeRepository', () => {
  let repository: ShapeCodeRepository;
  let queryBuilder: any;
  const data = new ShapeCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ShapeCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<ShapeCodeRepository>(ShapeCodeRepository);

    queryBuilder = module.get<SelectQueryBuilder<ShapeCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(new ShapeCodeDTO());
  });

  describe('getShapeCodes', () => {
    it('calls createQueryBuilder and gets all shape codes from the repository', async () => {
      const result = await repository.getShapeCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });
});
