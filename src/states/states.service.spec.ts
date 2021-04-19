import { Test } from '@nestjs/testing';

import { StatesService } from './states.service';
import { StatesRepository } from './states.repository';
import { StateMap } from '../maps/state.map';
import { StateDTO } from '../dto/state.dto';

const mockStatesRepository = () => ({
  find: jest.fn(),
});

const mockMap = () => ({
  many: jest.fn(),
});

describe('-- States Service --', () => {
  let statesService;
  let statesRepository;
  let stateMap;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        StatesService,
        {
          provide: StatesRepository,
          useFactory: mockStatesRepository,
        },
        { provide: StateMap, useFactory: mockMap },
      ],
    }).compile();

    statesService = module.get(StatesService);
    statesRepository = module.get(StatesRepository);
    stateMap = module.get(StateMap);
  });

  describe('getAllStates', () => {
    it('repository.find() and returns all states', async () => {
      const stateDto = new StateDTO();
      statesRepository.find.mockResolvedValue('list of states');
      stateMap.many.mockReturnValue(stateDto);

      let result = await statesService.getAllStates();

      expect(statesRepository.find).toHaveBeenCalled();
      expect(stateMap.many).toHaveBeenCalled();
      expect(result).toEqual(stateDto);
    });
  });
});
