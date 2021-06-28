import { SubDataCode } from 'src/entities/sub-data-code.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(SubDataCode)
export class SubDataCodeRepository extends Repository<SubDataCode> {
  async findAllSubDataCodes(): Promise<SubDataCode[]> {
    const query = await this.createQueryBuilder('sdc').select([
      'sdc.subDataCode',
      'sdc.subDataCodeDescription',
    ]);

    return query.getMany();
  }
}
