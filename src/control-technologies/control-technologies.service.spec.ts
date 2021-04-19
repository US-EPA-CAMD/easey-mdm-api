import { Test } from '@nestjs/testing';

import { ControlTechnologiesService } from './control-technologies.service';
import { ControlTechnologyRepository } from './control-code.repository';
import { ControlTechnologyMap } from '../maps/control-technology.map';

const mockControlTechnologiesRepository = () => ({
  getAllControlTechnologies: jest.fn(),
});

const mockMap = () => ({
  many: jest.fn(),
});

describe('-- Control Technologies Service --', () => {
  let controlTechnologiesService;
  let controlTechnologyRepository;
  let controlTechnologiesMap;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ControlTechnologiesService,
        {
          provide: ControlTechnologyRepository,
          useFactory: mockControlTechnologiesRepository,
        },
        { provide: ControlTechnologyMap, useFactory: mockMap },
      ],
    }).compile();

    controlTechnologiesService = module.get(ControlTechnologiesService);
    controlTechnologyRepository = module.get(ControlTechnologyRepository);
    controlTechnologiesMap = module.get(ControlTechnologyMap);
  });

  describe('getAllControlTechnologies', () => {
    it('calls repository.getAllControlTechnologies() and returns all valid control technologies', async () => {
      controlTechnologyRepository.getAllControlTechnologies.mockResolvedValue('list of control technologies');
        controlTechnologiesMap.many.mockReturnValue('mapped DTOs');

      let result = await controlTechnologiesService.getAllControlTechnologies();

      expect(controlTechnologyRepository.getAllControlTechnologies).toHaveBeenCalled();
      expect(controlTechnologiesMap.many).toHaveBeenCalled();
      expect(result).toEqual('mapped DTOs');
    });
  });
});

