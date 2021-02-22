import { Repository, EntityRepository } from 'typeorm';

import { UnitType } from '../entities/unit-type-code.entity';

@EntityRepository(UnitType)
export class UnitTypesRepository extends Repository<UnitType> {}
