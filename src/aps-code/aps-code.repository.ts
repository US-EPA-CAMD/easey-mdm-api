import { ApsCode } from '../entities/aps-code.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(ApsCode)
export class ApsCodeRepository extends Repository<ApsCode> {}
