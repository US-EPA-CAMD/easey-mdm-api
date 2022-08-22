import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.ref_method_code' })
export class ReferenceMethodCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    name: 'ref_method_cd',
  })
  referenceMethodCode: string;

  @Column({
    type: 'varchar',
    name: 'ref_method_cd_description',
  })
  referenceMethodCodeDescription: string;

  @Column({
    type: 'varchar',
    name: 'parameter_cd',
  })
  parameterCode: string;
}
