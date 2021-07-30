import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';
import { ParameterCodeDTO } from '../dto/parameter-code.dto';
import { ParameterCodeRepository } from './parameter-code.repository';
import { ParameterCode } from '../entities/parameter-code.entity';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('ParameterCodeRepository', () => {
  let parameterCodeRepository;
  let queryBuilder;
  const parameterCodeDTO = new ParameterCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ParameterCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    parameterCodeRepository = module.get<ParameterCodeRepository>(
      ParameterCodeRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<ParameterCode>>(
      SelectQueryBuilder,
    );

    parameterCodeRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(parameterCodeDTO);
  });

  describe('getParameterCodes', () => {
    it('calls createQueryBuilder and gets all parameter codes from the repository', async () => {
      const emptyFilters: ParameterCodeDTO = new ParameterCodeDTO();
      let result = await parameterCodeRepository.getParameterCodes(
        emptyFilters,
      );
      let filters: ParameterCodeDTO = {
        parameterCode: '',
        parameterCodeDescription: '',
      };
      result = await parameterCodeRepository.getParameterCodes(filters);

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(parameterCodeDTO);
    });
  });
});
