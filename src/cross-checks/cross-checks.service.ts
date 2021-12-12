import { Repository, FindConditions } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';

import { ParameterMethodSubData } from '../entities/vw-parameter-method-subdata.entity';
import { ParameterMethodSubDataMap } from '../maps/parameter-method-subdata.map';
import { ParameterMethodSubDataDTO } from '../dto/parameter-method-subdata.dto';

@Injectable()
export class CrossChecksService {
  constructor(
    //@InjectRepository(ParameterMethodSubData)
    //private readonly repository: Repository<ParameterMethodSubData>,
    private readonly map: ParameterMethodSubDataMap,
    private readonly logger: Logger,
  ) {}

  async getParameterMethodSubDataRelationships(
    methodCode: string,
    parameterCode: string,
    substituteDataCode: string,
  ): Promise<ParameterMethodSubDataDTO[]> {
    this.logger.info('Getting parameter code, method code, substitute data code relationships');

    // const results = await this.repository.find({
    //   where: {
    //     methodCode,
    //     parameterCode
    //   }
    // });

    this.logger.info('Retrieved parameter code, method code, substitute data code relationships');
    return new ParameterMethodSubDataDTO[0];//this.map.many(results);
  }
}
