import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WafMethodCodeRepository } from './waf-method-code.repository';
import { WafMethodCodeDTO } from '../dto/waf-method-code.dto';

@Injectable()
export class WafMethodCodeService {
  constructor(
    @InjectRepository(WafMethodCodeRepository)
    private readonly repository: WafMethodCodeRepository,
  ) {}

  async getWafMethodCodes(): Promise<WafMethodCodeDTO[]> {
    return this.repository.getWafMethodCodes();
  }
}
