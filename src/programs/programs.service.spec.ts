import { Test } from '@nestjs/testing';
import { ProgramsService } from './programs.service';
import { ProgramsRepository } from './programs.repository';
import { ProgramMap } from '../maps/program.map';
import { ProgramParamsDTO } from '../dto/program.params.dto';
import { Program } from '../enums/program.enum';

const mockFuelTypesRepository = () => ({
  find: jest.fn(),
});

const mockMap = () => ({
  many: jest.fn(),
});

describe('-- Programs Service --', () => {
  let programsService;
  let programsRepository;
  let programMap;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ProgramsService,
        {
          provide: ProgramsRepository,
          useFactory: mockFuelTypesRepository,
        },
        { provide: ProgramMap, useFactory: mockMap },
      ],
    }).compile();

    programsService = module.get(ProgramsService);
    programsRepository = module.get(ProgramsRepository);
    programMap = module.get(ProgramMap);
  });

  describe('getAllPrograms', () => {
    it('calls repository.find() and returns all programs except MATS', async () => {
      programsRepository.find.mockResolvedValue('list of programs');
      programMap.many.mockReturnValue('mapped DTOs');

      let filters: ProgramParamsDTO = {
        exclude: [Program.MATS],
      };
      let result = await programsService.getAllPrograms(filters);

      expect(programsRepository.find).toHaveBeenCalled();
      expect(programMap.many).toHaveBeenCalled();
      expect(result).toEqual('mapped DTOs');
    });

    it('calls repository.find() and returns all programs', async () => {
      programsRepository.find.mockResolvedValue('list of programs');
      programMap.many.mockReturnValue('mapped DTOs');

      let filters = new ProgramParamsDTO();
      let result = await programsService.getAllPrograms(filters);

      expect(programsRepository.find).toHaveBeenCalled();
      expect(programMap.many).toHaveBeenCalled();
      expect(result).toEqual('mapped DTOs');
    });
  });
});
