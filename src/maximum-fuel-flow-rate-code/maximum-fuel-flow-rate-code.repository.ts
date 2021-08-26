import { EntityRepository, Repository } from 'typeorm';
import { MaximumFuelFlowRateCode } from '../entities/maximum-fuel-flow-rate-code.entity';

@EntityRepository(MaximumFuelFlowRateCode)
export class MaximumFuelFlowRateCodeRepository extends Repository<
  MaximumFuelFlowRateCode
> {
  async getMaximumFuelFlowRateCodes(): Promise<MaximumFuelFlowRateCode[]> {
    const query = await this.createQueryBuilder('mffrc').select([
      'mffrc.maximumFuelFlowRateSourceCode',
      'mffrc.maximumFuelFlowRateSourceCodeDescription',
    ]);

    return query.getMany();
  }
}
