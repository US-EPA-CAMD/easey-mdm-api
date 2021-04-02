import { EntityRepository, Repository } from 'typeorm';

import { Program } from '../entities/program-code.entity';
import { ProgramParamsDTO } from '../dto/program.params.dto';

@EntityRepository(Program)
export class ProgramsRepository extends Repository<Program> {
    async getAllPrograms(
        programParamsDTO: ProgramParamsDTO
    ): Promise<Program[]> {
        const {exclude, allowanceOnly, activeOnly} = programParamsDTO;

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

        return query.getMany();
    }
}
