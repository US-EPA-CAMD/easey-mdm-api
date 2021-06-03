import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountFactRepository } from './account-fact.repository';
import { AccountNumberMap } from '../maps/account-number.map';
import { AccountNumberDTO } from '../dto/account-number.dto';

@Injectable()
export class AccountNumbersService {
  constructor(
    @InjectRepository(AccountFactRepository)
    private readonly repository: AccountFactRepository,
    private readonly map: AccountNumberMap,
  ) {}

  async getAllAccountNumbers(): Promise<AccountNumberDTO[]> {
    const query = await this.repository.getAllAccountNumbers();
    return this.map.many(query);
  }
}
