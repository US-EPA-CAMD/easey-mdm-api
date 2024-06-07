import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

import { DataSet } from '../entities/dataset.entity';

@Injectable()
export class DataSetRepository extends Repository<DataSet> {
  constructor(entityManager: EntityManager) {
    super(DataSet, entityManager);
  }

  async getDataSet(dataSetCode: string, groupCode: string): Promise<DataSet> {
    return this.createQueryBuilder('ds')
      .innerJoinAndSelect('ds.tables', 'tbl')
      .innerJoinAndSelect('tbl.columns', 'c')
      .where('ds.code = :dataSetCode', { dataSetCode })
      .andWhere('ds.groupCode = :groupCode', { groupCode })
      .orderBy('tbl.tableOrder, c.columnOrder')
      .getOne();
  }

  async getDataSetResults(query: string): Promise<any[]> {
    return this.query(query);
  }
}
