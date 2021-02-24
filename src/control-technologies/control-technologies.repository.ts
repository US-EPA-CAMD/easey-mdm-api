import { Repository, EntityRepository } from 'typeorm';

import { ControlTechnology } from '../entities/control-code.entity';

@EntityRepository(ControlTechnology)
export class ControlTechnologiesRepository extends Repository<ControlTechnology> {}
