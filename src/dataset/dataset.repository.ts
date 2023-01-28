import { Repository, EntityRepository } from 'typeorm';

import { DataSet } from '../entities/dataset.entity';

@EntityRepository(DataSet)
export class DataSetRepository extends Repository<DataSet> {
  
  async getDataSet(
    dataSetCode: string,
    groupCode: string
  ): Promise<DataSet> {
    return this.createQueryBuilder('ds')
    .innerJoinAndSelect('ds.tables', 'tbl')
    .innerJoinAndSelect('tbl.columns', 'c')
    .where('ds.code = :dataSetCode', { dataSetCode })
    .andWhere('ds.groupCode = :groupCode', { groupCode })
    .orderBy('tbl.tableOrder, c.columnOrder')
    .getOne();
  }

  async getDataSets(groupCode: string): Promise<DataSet[]> {
    return this.createQueryBuilder('ds')
    .innerJoinAndSelect('ds.tables', 'tbl')
    .innerJoinAndSelect('tbl.columns', 'c')
    .where('ds.groupCode = :groupCode', { groupCode })
    .orderBy('tbl.tableOrder, c.columnOrder')
    .getMany();
  }

  async getDataSetResults(query: string): Promise<any[]> {
    return this.query(query);
  }
}
