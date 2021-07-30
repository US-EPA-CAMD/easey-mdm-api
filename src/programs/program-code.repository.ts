import { EntityRepository, Repository } from 'typeorm';

import { Program } from '../entities/program-code.entity';
import { ProgramParamsDTO } from '../dto/program.params.dto';

@EntityRepository(Program)
export class ProgramRepository extends Repository<Program> {
  async getAllPrograms(programParamsDTO: ProgramParamsDTO): Promise<Program[]> {
    const {
      exclude,
      isActive,
      emissionsUIFilter,
      allowanceUIFilter,
      complianceUIFilter,
    } = programParamsDTO;

    const query = this.createQueryBuilder('prg')
      .select([
        'prg.programCode',
        'prg.programDescription',
        'prg.compParameterCode',
        'prg.programGroupCode',
        'grp.programGroupDescription',
        'prg.ozoneIndicator',
        'prg.tradingEndDate',
        'prg.emissionsUIFilter',
        'prg.allowanceUIFilter',
        'prg.complianceUIFilter',
      ])
      .leftJoin('prg.programGroup', 'grp')
      .orderBy('prg.programCode');

    if (String(emissionsUIFilter) === String(true)) {
      query.andWhere('prg.emissions_ui_filter = 1');
    }

    if (String(allowanceUIFilter) === String(true)) {
      query.andWhere('prg.allowance_ui_filter = 1');
    }

    if (String(complianceUIFilter) === String(true)) {
      query.andWhere('prg.compliance_ui_filter = 1');
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
