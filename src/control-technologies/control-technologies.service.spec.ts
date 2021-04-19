import { Test } from '@nestjs/testing';

import { ControlTechnologiesService } from './control-technologies.service';
import { ControlTechnologiesRepository } from './control-code.repository';
import { ControlTechnologyMap } from '../maps/control-technology.map';

const mockControlTechnologiesRepository = () => ({
  find: jest.fn(),
});

const mockMap = () => ({
  many: jest.fn(),
});

describe('-- Control Technologies Service --', () => {
  let controlTechnologiesService;
  let controlTechnologiesRepository;
  let controlTechnologiesMap;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ControlTechnologiesService,
        {
          provide: ControlTechnologiesRepository,
          useFactory: mockControlTechnologiesRepository,
        },
        { provide: ControlTechnologyMap, useFactory: mockMap },
      ],
    }).compile();

    controlTechnologiesService = module.get(ControlTechnologiesService);
    controlTechnologiesRepository = module.get(ControlTechnologiesRepository);
    controlTechnologiesMap = module.get(ControlTechnologyMap);
  });

  describe('getAllControlTechnologies', () => {
    it('calls repository.find() and returns all valid control technologies', async () => {
        controlTechnologiesRepository.find.mockResolvedValue('list of control technologies');
        controlTechnologiesMap.many.mockReturnValue('mapped DTOs');

      let result = await controlTechnologiesService.getAllControlTechnologies();

      expect(controlTechnologiesRepository.find).toHaveBeenCalled();
      expect(controlTechnologiesMap.many).toHaveBeenCalled();
      expect(result).toEqual('mapped DTOs');
    });
  });
});

