import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Program } from './program.entity';

@Entity({ name: 'camdmd.program_group_code' })
export class ProgramGroup extends BaseEntity {
  @PrimaryColumn({
    name: 'prg_group_cd',
  })
  programGroupCode: string;

  @Column({
    name: 'prg_group_description',
  })
  programGroupDescription: string;

  @OneToMany(
    () => Program,
    o => o.programGroup,
  )
  program: Program[];
}
