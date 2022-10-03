import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { AccountType } from './account-type.entity';

@Entity({ name: 'camdmd.account_type_group_code' })
export class AccountTypeGroup extends BaseEntity {
  @PrimaryColumn({
    name: 'account_type_group_cd',
  })
  accountTypeGroupCode: string;

  @Column({
    name: 'account_type_group_description',
  })
  accountTypeGroupDescription: string;

  @OneToMany(
    () => AccountType,
    at => at.accountTypeGroup,
  )
  accountType: AccountType[];
}
