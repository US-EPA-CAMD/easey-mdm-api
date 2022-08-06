import { RataFrequencyCode } from '../entities/rata-frequency-code.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(RataFrequencyCode)
export class RataFrequencyCodeRepository extends Repository<
  RataFrequencyCode
> {}
