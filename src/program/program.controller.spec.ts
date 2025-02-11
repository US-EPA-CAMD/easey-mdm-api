import { Test } from '@nestjs/testing';
import { EntityManager } from 'typeorm';

import { ProgramDTO } from '../dto/program.dto';
import { ProgramParamsDTO } from '../dto/program.params.dto';
import { ProgramMap } from '../maps/program.map';
import { ProgramController } from './program.controller';
import { ProgramRepository } from './program.repository';
import { ProgramService } from './program.service';

describe('ProgramController', () => {
  let service: ProgramService;
  let controller: ProgramController;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [ProgramController],
      providers: [EntityManager, ProgramMap, ProgramService, ProgramRepository],
    }).compile();

    service = module.get(ProgramService);
    controller = module.get(ProgramController);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });

  describe('getProgramCodes', () => {
    it('should return a list of program codes', async () => {
      const params = new ProgramParamsDTO();
      const expectedResult: ProgramDTO[] = [];

      jest.spyOn(service, 'getProgramCodes').mockResolvedValue(expectedResult);

      expect(await controller.getProgramCodes(params)).toStrictEqual({ items: expectedResult } );
    });
  });
});
