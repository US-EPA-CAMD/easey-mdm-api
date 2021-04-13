import { EntityRepository, Repository } from 'typeorm';

import { Program } from '../entities/program-code.entity';
import { ProgramParamsDTO } from '../dto/program.params.dto';

@EntityRepository(Program)
export class ProgramRepository extends Repository<Program> {
  async getAllPrograms(programParamsDTO: ProgramParamsDTO): Promise<Program[]> {
    const { exclude, allowanceOnly, isActive } = programParamsDTO;

    let query = this.createQueryBuilder('prg')
      .select([
        'prg.programCode',
        'prg.programDescription',
        'prg.compParameterCode',
        'prg.programGroupCode',
        'grp.programGroupDescription',
        'prg.ozoneIndicator',
        'prg.tradingEndDate',
        'prg.allowCompInd',
      ])
      .leftJoin('prg.programGroup', 'grp')
      .orderBy('prg.programCode');

    if (String(allowanceOnly) === String(true)) {
      query.andWhere('prg.allowCompInd = 1');
    }

    if (String(isActive) === String(true)) {
      const date = new Date();
      query.andWhere(
        '(prg.tradingEndDate is null OR prg.tradingEndDate > :date)',
        {
          date: date,
        },
      );
    }

    if (String(isActive) === String(false)) {
      const date = new Date();
      query.andWhere(
        'prg.tradingEndDate is not null AND prg.tradingEndDate <= :date',
        {
          date: date,
        },
      );
    }

    if (exclude) {
      query.andWhere(`prg.programCode NOT IN (:...programCodes)`, {
        programCodes: exclude.map(programCodes => {
          return programCodes.toUpperCase();
        }),
      });
    }

    return query.getMany();
  }
}
