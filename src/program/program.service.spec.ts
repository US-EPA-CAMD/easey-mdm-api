import { Test } from '@nestjs/testing';

import { ProgramRepository } from './program.repository';
import { ProgramService } from './program.service';
import { ProgramMap } from '../maps/program.map';
import { ProgramParamsDTO } from '../dto/program.params.dto';

const mockRepository = () => ({
  getProgramCodes: jest.fn(),
});

describe('ProgramService', () => {
  let repository: any;
  let service: ProgramService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ProgramMap,
        ProgramService,
        {
          provide: ProgramRepository,
          useFactory: mockRepository,
        },
      ],
    }).compile();

    service = module.get(ProgramService);
    repository = module.get(ProgramRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('getProgramCodes', () => {

    it('should return a list of program codes', async () => {
      const params = new ProgramParamsDTO();
      repository.getProgramCodes.mockResolvedValue([]);
      const results = await service.getProgramCodes(params);

      expect(repository.getProgramCodes).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });
});
