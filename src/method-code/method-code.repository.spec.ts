import { Test } from '@nestjs/testing';
import { MethodCode } from '../entities/method-code.entity';
import { SelectQueryBuilder } from 'typeorm';
import { MethodCodeDTO } from '../dto/method-code.dto';
import { MethodCodeRepository } from './method-code.repository';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('MethodCodeRepository', () => {
  let methodCodeRepository;
  let queryBuilder;
  const methodCodeDTO = new MethodCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        MethodCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    methodCodeRepository = module.get<MethodCodeRepository>(
      MethodCodeRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<MethodCode>>(
      SelectQueryBuilder,
    );

    methodCodeRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(methodCodeDTO);
  });

  describe('getMethodCodes', () => {
    it('calls createQueryBuilder and gets all method codes from the repository', async () => {
      const emptyFilters: MethodCodeDTO = new MethodCodeDTO();
      let result = await methodCodeRepository.getMethodCodes(emptyFilters);
      let filters: MethodCodeDTO = {
        methodCode: '',
        methodCodeDescription: '',
      };
      result = await methodCodeRepository.getMethodCodes(filters);

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(methodCodeDTO);
    });
  });
});
