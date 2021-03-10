import { EntityRepository, Repository } from 'typeorm';

import { Program } from '../entities/program-code.entity';

@EntityRepository(Program)
export class ProgramsRepository extends Repository<Program> {}
