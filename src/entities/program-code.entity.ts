import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

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
}
