import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camddmw.account_fact' })
export class AccountFact extends BaseEntity {
  @PrimaryColumn({
    name: 'account_number',
  })
  accountNumber: string;

  @PrimaryColumn({
    name: 'prg_code',
  })
  prgCode: string;

  @Column({
    name: 'account_name',
  })
  accountName: string;
}
