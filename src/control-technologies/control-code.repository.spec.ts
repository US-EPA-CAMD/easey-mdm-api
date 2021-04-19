import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { ControlTechnologyRepository } from './control-code.repository';
import { ControlTechnology } from '../entities/control-code.entity';
import { ControlTechnologyDTO } from '../dto/control-technology.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
  innerJoin: jest.fn(),
  orderBy: jest.fn(),
});

describe('ControlTechnologyRepository', () => {
  let controlTechnologyRepository;
  let queryBuilder;
  const controlTechnologyDto = new ControlTechnologyDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ControlTechnologyRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    controlTechnologyRepository = module.get<ControlTechnologyRepository>(
      ControlTechnologyRepository,
    );
    queryBuilder = module.get<SelectQueryBuilder<ControlTechnology>>(
      SelectQueryBuilder,
    );

    controlTechnologyRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.innerJoin.mockReturnValue(queryBuilder);
    queryBuilder.orderBy.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(controlTechnologyDto);
  });

  describe('getAllControlTechnologies', () => {
    it('calls createQueryBuilder and gets all ControlTechnologies from the repository', async () => {
      let result = await controlTechnologyRepository.getAllControlTechnologies();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(controlTechnologyDto);
    });
  });
});
