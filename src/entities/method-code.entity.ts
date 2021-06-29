import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.method_code' })
export class MethodCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'method_cd',
  })
  methodCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'method_cd_description',
  })
  methodCodeDescription: string;
}
