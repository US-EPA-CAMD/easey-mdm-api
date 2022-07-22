import { EntityRepository, Repository } from 'typeorm';
import { GasLevelCode } from '../entities/gas-level-code.entity';

@EntityRepository(GasLevelCode)
export class GasLevelCodeRepository extends Repository<GasLevelCode> {}
