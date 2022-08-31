import { Test } from '@nestjs/testing';
import { AcquisitionMethodCodeDTO } from '../dto/acquisition-method-code.dto';
import { AcquisitionMethodCode } from '../entities/acquisition-method-code.entity';
import { SelectQueryBuilder } from 'typeorm';
import { AcquisitionMethodCodeRepository } from './acquisition-method-code.repository';

const mockQueryBuilder = () => ({
  // getAcquisitionMethodCodes: jest.fn(),
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('AcquisitionMethodCodeRepository', () => {
  let repository: AcquisitionMethodCodeRepository;
  let queryBuilder: any;
  const data = new AcquisitionMethodCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AcquisitionMethodCodeRepository,
        {
          provide: SelectQueryBuilder,
          useFactory: mockQueryBuilder,
        },
      ],
    }).compile();

    repository = module.get<AcquisitionMethodCodeRepository>(
      AcquisitionMethodCodeRepository,
    );
    queryBuilder = module.get<SelectQueryBuilder<AcquisitionMethodCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(data);
  });

  describe('getAcquisitionMethodCodes', () => {
    it('calls createQueryBuilder and gets all acquisition-method-codes from the repository', async () => {
      let result = await repository.getAcquisitionMethodCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });
});
