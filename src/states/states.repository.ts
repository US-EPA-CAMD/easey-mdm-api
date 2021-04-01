import { EntityRepository, Repository } from 'typeorm';

import { State } from '../entities/state-code.entity';

@EntityRepository(State)
export class StatesRepository extends Repository<State> {}
