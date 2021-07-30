import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { Program } from '../entities/program-code.entity';
import { ProgramParamsDTO } from '../dto/program.params.dto';
import { ProgramRepository } from './program-code.repository';
import { ProgramDTO } from '../dto/program.dto';
import { Programs } from '../enums/program.enum';

const mockQueryBuilder = () => ({
  andWhere: jest.fn(),
  getMany: jest.fn(),
  select: jest.fn(),
  leftJoin: jest.fn(),
  orderBy: jest.fn(),
});

describe('ProgramRepository', () => {
  let programRepository;
  let queryBuilder;
  const programDTO = new ProgramDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ProgramRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    programRepository = module.get<ProgramRepository>(ProgramRepository);

    queryBuilder = module.get<SelectQueryBuilder<Program>>(SelectQueryBuilder);

    programRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.leftJoin.mockReturnValue(queryBuilder);
    queryBuilder.andWhere.mockReturnValue(queryBuilder);
    queryBuilder.orderBy.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(programDTO);
  });

  describe('getAllPrograms', () => {
    it('calls createQueryBuilder and gets all inactive allowance programs from the repository', async () => {
      const emptyFilters: ProgramDTO = new ProgramDTO();
      let result = await programRepository.getAllPrograms(emptyFilters);
      let filters: ProgramParamsDTO = {
        exclude: [Programs.ARP],
        isActive: false,
        emissionsUIFilter: true,
        allowanceUIFilter: true,
        complianceUIFilter: true,
      };
      result = await programRepository.getAllPrograms(filters);

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(programDTO);
    });
    it('calls createQueryBuilder and gets all active allowance programs from the repository', async () => {
      let filters: ProgramParamsDTO = {
        exclude: [Programs.ARP],
        isActive: true,
        emissionsUIFilter: true,
        allowanceUIFilter: true,
        complianceUIFilter: true,
      };
      let result = await programRepository.getAllPrograms(filters);

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(programDTO);
    });
  });
});
