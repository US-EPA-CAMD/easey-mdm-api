import { EntityRepository, Repository } from 'typeorm';
import { MaterialCode } from '../entities/material-code.entity';

@EntityRepository(MaterialCode)
export class MaterialCodeRepository extends Repository<MaterialCode> {
  async getMaterialCodes(): Promise<MaterialCode[]> {
    const query = this.createQueryBuilder('mc').select([
      'mc.materialCode',
      'mc.materialCodeDescription',
    ]);

    return await query.getMany();
  }
}
