import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubDataCodeDto } from '../dto/sub-data-code.dto';
import { SubDataCodeRepository } from './sub-data-code.repository';

@Injectable()
export class SubDataCodeService {
  constructor(
    @InjectRepository(SubDataCodeRepository)
    private readonly repository: SubDataCodeRepository,
  ) {}

  createSubDataCode(createSubDataCodeDto: SubDataCodeDto) {
    return 'This action adds a new subDataCode';
  }

  async getSubDataCodes(): Promise<SubDataCodeDto[]> {
    const result = await this.repository.findAllSubDataCodes();

    return result;
  }

  getSubDataCode(id: string): Promise<SubDataCodeDto> {
    const result = this.repository.findOne(id);

    if (!result) {
      throw new Error('Invalid Request');
    }

    return result;
  }

  async updateSubDataCode(
    id: string,
    payload: SubDataCodeDto,
  ): Promise<SubDataCodeDto> {
    const result = await this.getSubDataCode(id);

    (result.subDataCode = payload.subDataCode),
      (result.subDataCodeDescription = payload.subDataCode);

    return await this.repository.save(result);
  }

  removeSubDataCode(id: string) {
    return `This action removes a #${id} subDataCode`;
  }
}
