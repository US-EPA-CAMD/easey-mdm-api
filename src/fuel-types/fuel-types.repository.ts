import { EntityRepository, Repository } from 'typeorm';

import { FuelType } from '../entities/fuel-type-code.entity';

@EntityRepository(FuelType)
export class FuelTypesRepository extends Repository<FuelType> {}
