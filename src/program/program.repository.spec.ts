import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';
import { Program as ProgramCode } from '@us-epa-camd/easey-common/enums';

import { ProgramRepository } from './program.repository';
import { ProgramParamsDTO } from '../dto/program.params.dto';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  leftJoin: jest.fn(),
  andWhere: jest.fn(),
  orderBy: jest.fn(),
  getMany: jest.fn(),  
});

describe('ProgramRepository', () => {
  let queryBuilder: any;
  let repository: ProgramRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ProgramRepository,
        {
          provide: SelectQueryBuilder,
          useFactory: mockQueryBuilder
        },
      ],
    }).compile();

    repository = module.get(ProgramRepository);
    queryBuilder = module.get(SelectQueryBuilder);

    repository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.leftJoin.mockReturnValue(queryBuilder);
    queryBuilder.andWhere.mockReturnValue(queryBuilder);
    queryBuilder.orderBy.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue([]);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(queryBuilder).toBeDefined();
  });

  describe('getProgramCodes', () => {

    it('should return a list of inactive programs codes', async () => {
      const params: ProgramParamsDTO = {
        exclude: [ProgramCode.ARP],
        isActive: false,
        emissionsUIFilter: true,
        allowanceUIFilter: true,
        complianceUIFilter: true,
      };
      const results = await repository.getProgramCodes(params);
      expect(queryBuilder.select).toHaveBeenCalled();
      expect(queryBuilder.leftJoin).toHaveBeenCalled();
      expect(queryBuilder.andWhere).toHaveBeenCalled();
      expect(queryBuilder.orderBy).toHaveBeenCalled();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

    it('should return a list of active program codes', async () => {
      const params: ProgramParamsDTO = {
        exclude: [ProgramCode.ARP],
        isActive: true,
        emissionsUIFilter: true,
        allowanceUIFilter: true,
        complianceUIFilter: true,
      };
      const results = await repository.getProgramCodes(params);
      expect(queryBuilder.select).toHaveBeenCalled();
      expect(queryBuilder.leftJoin).toHaveBeenCalled();
      expect(queryBuilder.andWhere).toHaveBeenCalled();
      expect(queryBuilder.orderBy).toHaveBeenCalled();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });
});
