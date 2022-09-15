import { EntityRepository, Repository } from 'typeorm';
import { ProbeTypeCode } from '../entities/probe-type-code.entity';

@EntityRepository(ProbeTypeCode)
export class ProbeTypeCodeRepository extends Repository<ProbeTypeCode> {
  async getProbeTypeCodes(): Promise<ProbeTypeCode[]> {
    const query = this.createQueryBuilder('ptc').select([
      'ptc.probeTypeCode',
      'ptc.probeTypeCodeDescription',
    ]);

    return query.getMany();
  }
}