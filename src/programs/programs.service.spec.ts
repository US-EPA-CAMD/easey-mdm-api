import { Test } from '@nestjs/testing';

import { ProgramsService } from './programs.service';
import { ProgramRepository } from './program-code.repository';
import { ProgramMap } from '../maps/program.map';
import { ProgramParamsDTO } from '../dto/program.params.dto';
import { Program } from '@us-epa-camd/easey-common/enums';

const mockProgramRepository = () => ({
  getAllPrograms: jest.fn(),
});

const mockMap = () => ({
  many: jest.fn(),
});

describe('-- Programs Service --', () => {
  let programsService;
  let programRepository;
  let programMap;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ProgramsService,
        {
          provide: ProgramRepository,
          useFactory: mockProgramRepository,
        },
        { provide: ProgramMap, useFactory: mockMap },
      ],
    }).compile();

    programsService = module.get(ProgramsService);
    programRepository = module.get(ProgramRepository);
    programMap = module.get(ProgramMap);
  });

  describe('getAllPrograms', () => {
    it('calls repository.getAllPrograms() and returns all programs', async () => {
      programRepository.getAllPrograms.mockResolvedValue('list of programs');
      programMap.many.mockReturnValue('mapped DTOs');

      let filters = new ProgramParamsDTO();
      let result = await programsService.getAllPrograms(filters);

      expect(programMap.many).toHaveBeenCalled();
      expect(result).toEqual('mapped DTOs');
    });

    it('calls repository.find() and returns all active allowance programs excluding ARP', async () => {
      programRepository.getAllPrograms.mockResolvedValue('list of programs');
      programMap.many.mockReturnValue('mapped DTOs');

      let filters: ProgramParamsDTO = {
        exclude: [Program.ARP],
        isActive: true,
        emissionsUIFilter: true,
        allowanceUIFilter: true,
        complianceUIFilter: true,
      };
      let result = await programsService.getAllPrograms(filters);

      expect(programMap.many).toHaveBeenCalled();
      expect(result).toEqual('mapped DTOs');
    });
  });
});
