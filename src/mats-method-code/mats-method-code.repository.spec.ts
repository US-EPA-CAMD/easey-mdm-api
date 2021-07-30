import { Test } from '@nestjs/testing';
import { MatsMethodCodeDTO } from '../dto/mats-method-code.dto';
import { MatsMethodCode } from '../entities/mats-method-code.entity';
import { SelectQueryBuilder } from 'typeorm';
import { MatsMethodCodeRepository } from './mats-method-code.repository';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('MatsMethodCodeRepository', () => {
  let matsMethodCodeRepository;
  let queryBuilder;
  const matsMethodCodeDTO = new MatsMethodCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        MatsMethodCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    matsMethodCodeRepository = module.get<MatsMethodCodeRepository>(
      MatsMethodCodeRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<MatsMethodCode>>(
      SelectQueryBuilder,
    );

    matsMethodCodeRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(matsMethodCodeDTO);
  });

  describe('getMatsMethodCodes', () => {
    it('calls createQueryBuilder and gets all mats method codes from the repository', async () => {
      const emptyFilters: MatsMethodCodeDTO = new MatsMethodCodeDTO();
      let result = await matsMethodCodeRepository.getMatsMethodCodes(
        emptyFilters,
      );
      let filters: MatsMethodCodeDTO = {
        matsMethodCode: '',
        matsMethodCodeDescription: '',
      };
      result = await matsMethodCodeRepository.getMatsMethodCodes(filters);

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(matsMethodCodeDTO);
    });
  });
});
