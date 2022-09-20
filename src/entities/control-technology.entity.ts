import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ControlEquipParam } from './control-equip-param.entity';

@Entity({ name: 'camdecmpsmd.control_code' })
export class ControlTechnology extends BaseEntity {
  @PrimaryColumn({
    name: 'control_cd',
  })
  controlCode: string;

  @Column({
    name: 'control_description',
  })
  controlDescription: string;

  @Column({
    name: 'control_equip_param_cd',
  })
  controlEquipParamCode: string;

  @ManyToOne(
    () => ControlEquipParam,
    o => o.controlTechnology,
  )
  @JoinColumn([
    {
      name: 'control_equip_param_cd',
      referencedColumnName: 'controlEquipParamCode',
    },
  ])
  controlEquipParam: ControlEquipParam;
}
