import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { EquationCodeRepository } from './equation-code.repository';
import { EquationCode } from '../entities/equation-code.entity';
import { EquationCodeDTO } from '../dto/equation-code.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('EquationCodeRepository', () => {
  let repository: EquationCodeRepository;
  let queryBuilder: any;
  const equationCodeDTO = new EquationCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        EquationCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<EquationCodeRepository>(EquationCodeRepository);
    queryBuilder = module.get<SelectQueryBuilder<EquationCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(equationCodeDTO);
  });

  describe('getAllControlTechnologies', () => {
    it('calls createQueryBuilder and gets all equation codes from the repository', async () => {
      let result = await repository.getEquationCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(equationCodeDTO);
    });
  });
});
