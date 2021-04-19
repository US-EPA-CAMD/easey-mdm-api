import { BaseEntity, Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';

import { ControlTechnology } from './control-code.entity';

@Entity({ name: 'camdecmpsmd.control_equip_param_code' })
export class ControlEquipParam extends BaseEntity {
  @PrimaryColumn({
    name: 'control_equip_param_cd',
  })
  controlEquipParamCode: string;

  @Column({
    name: 'control_equip_param_desc',
  })
  controlEquipParamDesc: string;

  @OneToMany(
    () => ControlTechnology,
    ct => ct.controlEquipParam,
  )
  controlTechnology: ControlTechnology[];
}
