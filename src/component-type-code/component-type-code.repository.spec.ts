import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { ComponentTypeCodeRepository } from './component-type-code.repository';
import { ComponentTypeCode } from '../entities/component-type-code.entity';
import { ComponentTypeCodeDTO } from '../dto/component-type-code.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('ComponentTypeCodeRepository', () => {
  let repository: ComponentTypeCodeRepository;
  let queryBuilder: any;
  const data = new ComponentTypeCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ComponentTypeCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<ComponentTypeCodeRepository>(
      ComponentTypeCodeRepository,
    );
    queryBuilder = module.get<SelectQueryBuilder<ComponentTypeCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(data);
  });

  describe('getComponentTypeCodes', () => {
    it('calls createQueryBuilder and gets all component-type codes from the repository', async () => {
      let result = await repository.getComponentTypeCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });
});
