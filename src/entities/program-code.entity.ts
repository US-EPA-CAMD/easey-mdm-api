import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ProgramGroup } from './program-group-code.entity';

@Entity({ name: 'camdmd.program_code' })
export class Program extends BaseEntity {
  @PrimaryColumn({
    name: 'prg_cd',
  })
  programCode: string;

  @Column({
    name: 'prg_description',
  })
  programDescription: string;

  @Column({
    name: 'comp_parameter_cd',
  })
  compParameterCode: string;

  @Column({
    name: 'prg_group_cd',
  })
  programGroupCode: string;

  @Column({
    name: 'os_ind',
  })
  ozoneIndicator: number;

  @Column({
    name: 'allow_comp_ind'
  })
  allowCompInd: number;

  @Column({
    name: 'trading_end_date'
  })
  tradingEndDate: Date;

  @ManyToOne(
    () => ProgramGroup,
    grp => grp.program,
  )
  @JoinColumn([
    {
      name: 'prg_group_cd',
      referencedColumnName: 'programGroupCode',
    },
  ])
  programGroup: ProgramGroup;
}
