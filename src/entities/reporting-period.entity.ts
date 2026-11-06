import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { NumericColumnTransformer } from '@us-epa-camd/easey-common/transforms';

@Entity({ name: 'camdecmpsmd.reporting_period' })
export class ReportingPeriod extends BaseEntity {
  @PrimaryColumn({
    type: 'numeric',
    name: 'rpt_period_id',
    transformer: new NumericColumnTransformer(),
  })
  id: number;

  @Column({
    type: 'numeric',
    transformer: new NumericColumnTransformer(),
    nullable: false,
    name: 'calendar_year',
  })
  calendarYear: number;

  @Column({
    type: 'numeric',
    transformer: new NumericColumnTransformer(),
    nullable: false,
    name: 'quarter',
  })
  quarter: number;

  @Column({
    type: 'date',
    nullable: false,
    name: 'begin_date',
  })
  beginDate: Date;

  @Column({
    type: 'date',
    nullable: false,
    name: 'end_date',
  })
  endDate: Date;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'period_description',
  })
  periodDescription: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'period_abbreviation',
  })
  periodAbbreviation: string;

  @Column({
    type: 'numeric',
    transformer: new NumericColumnTransformer(),
    nullable: false,
    name: 'archive_ind',
  })
  archiveInd: number;
}
