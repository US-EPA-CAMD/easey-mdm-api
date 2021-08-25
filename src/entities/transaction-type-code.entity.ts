import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdmd.transaction_type_code' })
export class TransactionType extends BaseEntity {
  @PrimaryColumn({
    name: 'trans_type_cd',
  })
  transactionTypeCode: string;

  @Column({
    name: 'trans_type_description',
  })
  transactionTypeDescription: string;
}
