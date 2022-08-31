import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.gas_type_code' })
export class GasTypeCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'gas_type_cd',
  })
  gasTypeCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'gas_type_description',
  })
  gasTypeDescription: string;
}
