import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdmd.state_code' })
export class State extends BaseEntity {
  @PrimaryColumn({
    name: 'state_cd',
  })
  stateCode: string;

  @Column({
    name: 'state_name',
  })
  stateName: string;

  @Column({
    name: 'domestic_ind',
  })
  domesticInd: number;

  @Column({
    name: 'indian_country_ind',
  })
  indianCountryInd: number;

  @Column({
    name: 'epa_region'
  })
  epaRegion: number;
}
