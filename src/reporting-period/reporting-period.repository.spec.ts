import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';
import { ReportingPeriodDTO } from '../dto/reporting-period.dto';
import { ReportingPeriod } from '../entities/reporting-period.entity';
import { ReportingPeriodRepository } from './reporting-period.repository';

const data = [new ReportingPeriodDTO()];
const mockQueryBuilder = () => ({
  getMany: jest.fn(() => [new ReportingPeriod()]),
  select: jest.fn(),
  where: jest.fn(),
});

describe('ReportingPeriodRepository', () => {
  let repository: ReportingPeriodRepository;
  let queryBuilder: any;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ReportingPeriodRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<ReportingPeriodRepository>(
      ReportingPeriodRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<ReportingPeriod>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue([]);
  });

  describe('getReportingPeriods', () => {
    it('calls createQueryBuilder and gets all reporting periods from the repository', async () => {
      const result = await repository.getReportingPeriods();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });
});
