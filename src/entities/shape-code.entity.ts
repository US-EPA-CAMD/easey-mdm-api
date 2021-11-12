import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.shape_code' })
export class ShapeCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    name: 'shape_cd',
  })
  shapeCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'shape_cd_description',
  })
  shapeCodeDescription: string;
}
