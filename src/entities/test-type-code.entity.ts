import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'camdecmpsmd.test_type_code',
})
export class TestTypeCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    name: 'test_type_cd',
  })
  testTypeCode: string;

  @Column({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'test_type_cd_description',
  })
  testTypeCodeDescription: string;

  @Column({
    type: 'varchar',
    length: 7,
    name: 'group_cd',
  })
  testTypeGroupCode: string;
}
