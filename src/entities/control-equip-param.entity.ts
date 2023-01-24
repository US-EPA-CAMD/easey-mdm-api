import { BaseEntity, Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';

import { ControlTechnology } from './control-technology.entity';

@Entity({ name: 'camdecmpsmd.control_equip_param_code' })
export class ControlEquipParam extends BaseEntity {
  @PrimaryColumn({
    name: 'control_equip_param_cd',
  })
  controlEquipParamCode: string;

  @Column({
    name: 'control_equip_param_desc',
  })
  controlEquipParamDescription: string;

  @OneToMany(
    () => ControlTechnology,
    ct => ct.controlEquipParam,
  )
  controlTechnology: ControlTechnology[];
}