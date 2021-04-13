import { Test } from '@nestjs/testing';

import { ProgramsController } from './programs.controller';
import { ProgramsService } from './programs.service';
import { ProgramMap } from '../maps/program.map';
import { ProgramRepository } from './program-code.repository';
import { ProgramDTO } from '../dto/program.dto';
import { ProgramParamsDTO } from '../dto/program.params.dto';

describe('-- Programs Controller --', () => {
  let programsController: ProgramsController;
  let programsService: ProgramsService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [ProgramsController],
      providers: [ProgramsService, ProgramMap, ProgramRepository],
    }).compile();

    programsController = module.get(ProgramsController);
    programsService = module.get(ProgramsService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('* getAllPrograms', () => {
    it('should call the service and return a list of all programs', async () => {
      const expectedResult: ProgramDTO[] = [];
      const programParamsDto = new ProgramParamsDTO();

      jest
        .spyOn(programsService, 'getAllPrograms')
        .mockResolvedValue(expectedResult);
      expect(await programsController.getAllPrograms(programParamsDto)).toBe(
        expectedResult,
      );
    });
  });
});
