import { Repository, EntityRepository } from 'typeorm';

import { DataSet } from '../entities/dataset.entity';

@EntityRepository(DataSet)
export class CodeTableRepository extends Repository<DataSet> {
  async getDataSet(dataSetCode: string, templateCode: string): Promise<DataSet> {
    return this.createQueryBuilder('ds')
    .innerJoinAndSelect('ds.tables', 'tbl')
    .innerJoinAndSelect('tbl.columns', 'c')
    .where('ds.code = :dataSetCode', { dataSetCode })
    .andWhere('ds.templateCode = :templateCode', { templateCode })
    .orderBy('tbl.tableOrder, c.columnOrder')
    .getOne();
  }

  async getDataSets(templateCode: string): Promise<DataSet[]> {
    return this.createQueryBuilder('ds')
    .innerJoinAndSelect('ds.tables', 'tbl')
    .innerJoinAndSelect('tbl.columns', 'c')
    .where('ds.templateCode = :templateCode', { templateCode })
    .orderBy('tbl.tableOrder, c.columnOrder')
    .getMany();
  }

  async getCodeTable(query: string): Promise<any[]> {
    return this.query(query);
  }
}
