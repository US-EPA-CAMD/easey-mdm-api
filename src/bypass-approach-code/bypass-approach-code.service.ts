import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BypassApproachCodeDTO } from 'src/dto/bypass-approach-code.dto';
import { BypassApproachCodeRepository } from './bypass-approach-code.repository';

@Injectable()
export class BypassApproachCodeService {
  constructor(
    @InjectRepository(BypassApproachCodeRepository)
    private readonly repository: BypassApproachCodeRepository,
  ) {}

  async getAllBypassApproachCodes(): Promise<BypassApproachCodeDTO[]> {
    const result = await this.repository.getAllBypassApproachCodes();

    return result;
  }

  async getBypassApproachCode(id: string): Promise<BypassApproachCodeDTO> {
    const result = this.repository.findOne(id)

    if (!result) {
      throw new NotFoundException('Invalid Request')
    }

    return result
  }

  async updateBypassApproachCode(
    id: string,
    payload: BypassApproachCodeDTO,
  ): Promise<BypassApproachCodeDTO> {
    const result = await this.getBypassApproachCode(id)
    
    result.bypassApproachCode = id,
    result.bypassApproachCodeDescription = payload.bypassApproachCode

    return await this.repository.save(result)
  }
}
