import { RunStatusCode } from '../entities/run-status-code.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(RunStatusCode)
export class RunStatusCodeRepository extends Repository<
  RunStatusCode
 > {}