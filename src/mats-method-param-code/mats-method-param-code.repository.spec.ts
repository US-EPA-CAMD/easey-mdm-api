import { Test } from '@nestjs/testing';
import { MatsMethodParamCodeDTO } from '../dto/mats-method-param-code.dto';
import { MatsMethodParamCode } from '../entities/mats-method-parameter-code.entity';
import { SelectQueryBuilder } from 'typeorm';
import { MatsMethodParamCodeRepository } from './mats-method-param-code.repository';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('MatsMethodParamCodeRepository', () => {
  let matsMethodParamCodeRepository;
  let queryBuilder;
  const matsMethodParamCodeDTO = new MatsMethodParamCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        MatsMethodParamCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    matsMethodParamCodeRepository = module.get<MatsMethodParamCodeRepository>(
      MatsMethodParamCodeRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<MatsMethodParamCode>>(
      SelectQueryBuilder,
    );

    matsMethodParamCodeRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(matsMethodParamCodeDTO);
  });

  describe('getMatsMethodParamCodes', () => {
    it('calls createQueryBuilder and gets all mats method param codes from the repository', async () => {
      const emptyFilters: MatsMethodParamCodeDTO = new MatsMethodParamCodeDTO();
      let result = await matsMethodParamCodeRepository.getMatsMethodParamCodes(
        emptyFilters,
      );
      let filters: MatsMethodParamCodeDTO = {
        matsMethodParamCode: '',
        matsMethodParamCodeDescription: '',
      };
      result = await matsMethodParamCodeRepository.getMatsMethodParamCodes(
        filters,
      );

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(matsMethodParamCodeDTO);
    });
  });
});
