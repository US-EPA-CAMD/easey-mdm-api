import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.acquisition_method_code' })
export class AcquisitionMethodCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'acq_cd',
  })
  acquisitionMethodCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'acq_cd_description',
  })
  acquisitionMethodCodeDescription: string;
}
