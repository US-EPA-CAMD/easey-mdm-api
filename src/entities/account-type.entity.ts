import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

import { AccountTypeGroup } from './account-type-group.entity';

@Entity({ name: 'camdmd.account_type_code' })
export class AccountType extends BaseEntity {
  @PrimaryColumn({
    name: 'account_type_cd',
  })
  accountTypeCode: string;

  @Column({
    name: 'account_type_description',
  })
  accountTypeDescription: string;

  @Column({
    name: 'account_type_group_cd',
  })
  accountTypeGroupCode: string;

  @ManyToOne(
    () => AccountTypeGroup,
    atg => atg.accountType,
  )
  @JoinColumn([
    {
      name: 'account_type_group_cd',
      referencedColumnName: 'accountTypeGroupCode',
    },
  ])
  accountTypeGroup: AccountTypeGroup;
}
