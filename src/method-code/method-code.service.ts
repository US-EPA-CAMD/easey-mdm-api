import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MethodCodeDTO } from '../dto/method-code.dto';
import { MethodCodeRepository } from './method-code.repository';

@Injectable()
export class MethodCodeService {
  constructor(
    @InjectRepository(MethodCodeRepository)
    private readonly methodCodeRepository: MethodCodeRepository,
  ) {}

  async getMethodCodes(): Promise<MethodCodeDTO[]> {
    return await this.methodCodeRepository.getMethodCodes();
  }
}
