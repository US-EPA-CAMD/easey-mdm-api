import { NumericColumnTransformer } from '@us-epa-camd/easey-common/transforms';
import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'camdecmpsmd.test_type_group_code',
})
export class TestTypeGroupCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    name: 'test_type_group_cd',
  })
  testTypeGroupCode: string;

  @Column({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'test_type_group_cd_description',
  })
  testTypeGroupCodeDescription: string;

  @Column({
    type: 'numeric',
    transformer: new NumericColumnTransformer(),
    nullable: false,
    name: 'child_depth',
  })
  childDepth: number;
}
