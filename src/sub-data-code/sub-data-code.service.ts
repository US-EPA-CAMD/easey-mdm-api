import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { SubDataCodeDTO } from '../dto/sub-data-code.dto';
import { SubDataCodeRepository } from './sub-data-code.repository';

@Injectable()
export class SubDataCodeService {
  constructor(
    @InjectRepository(SubDataCodeRepository)
    private readonly repository: SubDataCodeRepository,
    private readonly logger: Logger,
  ) {}

  // createSubDataCode(createSubDataCodeDto: SubDataCodeDTO) {
  //   return 'This action adds a new subDataCode';
  // }

  async getSubDataCodes(): Promise<SubDataCodeDTO[]> {
    this.logger.info('Getting sub data codes');
    let query;
    try {
      query = await this.repository.getSubDataCodes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got sub data codes');

    return query;
  }

  // getSubDataCode(id: string): Promise<SubDataCodeDTO> {
  //   const result = this.repository.findOne(id);

  //   if (!result) {
  //     throw new Error('Invalid Request');
  //   }

  //   return result;
  // }

  // async updateSubDataCode(
  //   id: string,
  //   payload: SubDataCodeDTO,
  // ): Promise<SubDataCodeDTO> {
  //   const result = await this.getSubDataCode(id);

  //   (result.subDataCode = payload.subDataCode),
  //     (result.subDataCodeDescription = payload.subDataCode);

  //   return await this.repository.save(result);
  // }

  // removeSubDataCode(id: string) {
  //   return `This action removes a #${id} subDataCode`;
  // }
}
