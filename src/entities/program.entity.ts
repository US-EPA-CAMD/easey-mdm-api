import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { ProgramGroup } from './program-group.entity';

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
  compParameter: string;

  @Column({
    name: 'prg_group_cd',
  })
  programGroupCode: string;

  @Column({
    name: 'os_ind',
  })
  ozoneIndicator: number;

  @Column({
    name: 'emissions_ui_filter',
  })
  emissionsUIFilter: number;

  @Column({
    name: 'allowance_ui_filter',
  })
  allowanceUIFilter: number;

  @Column({
    name: 'compliance_ui_filter',
  })
  complianceUIFilter: number;

  @Column({
    name: 'trading_end_date',
  })
  tradingEndDate: Date;

  @ManyToOne(
    () => ProgramGroup,
    o => o.program,
  )
  @JoinColumn([
    {
      name: 'prg_group_cd',
      referencedColumnName: 'programGroupCode',
    },
  ])
  programGroup: ProgramGroup;
}
