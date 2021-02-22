import { Repository, EntityRepository } from 'typeorm';

import { UnitTypeCode } from '../entities/unit-type-code.entity';

@EntityRepository(UnitTypeCode)
export class UnitTypeCodeRepository extends Repository<UnitTypeCode> {}
