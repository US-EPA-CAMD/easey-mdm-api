import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { ControlEquipParamCodeRepository } from './control-equip-param-code.repository';
import { ControlEquipParam } from '../entities/control-equip-param-code.entity';
import { ControlEquipParamCodeDTO } from '../dto/control-equip-param-code.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('ControlEquipParamCodeRepository', () => {
  let repository: ControlEquipParamCodeRepository;
  let queryBuilder: any;
  const defaultPurposeCodeDTO = new ControlEquipParamCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ControlEquipParamCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<ControlEquipParamCodeRepository>(
      ControlEquipParamCodeRepository,
    );
    queryBuilder = module.get<SelectQueryBuilder<ControlEquipParam>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(defaultPurposeCodeDTO);
  });

  describe('getAllControlTechnologies', () => {
    it('calls createQueryBuilder and gets all control-equip-param codes from the repository', async () => {
      let result = await repository.getControlEquipParamCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(defaultPurposeCodeDTO);
    });
  });
});
