import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

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
}
