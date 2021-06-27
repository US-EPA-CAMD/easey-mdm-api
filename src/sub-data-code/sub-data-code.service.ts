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

  create(createSubDataCodeDto: SubDataCodeDto) {
    return 'This action adds a new subDataCode';
  }

  async findAllSubDataCode(): Promise<SubDataCodeDto[]> {
    const result = await this.repository.findAllSubDataCodes();

    return result;
  }

  findOneSubDataCode(id: string): Promise<SubDataCodeDto> {
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
    const result = await this.findOneSubDataCode(id);

    (result.subDataCode = payload.subDataCode),
      (result.subDataCodeDescription = payload.subDataCode);

    return await this.repository.save(result);
  }

  removeSubDataCode(id: string) {
    return `This action removes a #${id} subDataCode`;
  }
}
