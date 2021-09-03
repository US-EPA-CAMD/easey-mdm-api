import { EntityRepository, Repository } from 'typeorm';
import { AcquisitionMethodCode } from '../entities/acquisition-method-code.entity';

@EntityRepository(AcquisitionMethodCode)
export class AcquisitionMethodCodeRepository extends Repository<
  AcquisitionMethodCode
> {
  async getAcquisitionMethodCodes(): Promise<AcquisitionMethodCode[]> {
    const query = await this.createQueryBuilder('amc').select([
      'amc.acquisitionMethodCode',
      'amc.acquisitionMethodCodeDescription',
    ]);

    return query.getMany();
  }
}
