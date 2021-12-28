import { Test } from '@nestjs/testing';

import { StatesService } from './states.service';
import { StatesRepository } from './states.repository';
import { StateMap } from '../maps/state.map';
import { StateDTO } from '../dto/state.dto';
import { State } from '../entities/state-code.entity';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

const mockStatesRepository = () => ({
  find: jest.fn(),
});

describe('-- States Service --', () => {
  let statesService;
  let statesRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        StatesService,
        {
          provide: StatesRepository,
          useFactory: mockStatesRepository,
        },
        StateMap,
      ],
    }).compile();

    statesService = module.get(StatesService);
    statesRepository = module.get(StatesRepository);
  });

  describe('getAllStates', () => {
    it('repository.find() and returns all states', async () => {
      let stateEntity: State = new State();
      stateEntity.stateCode = '';
      stateEntity.stateName = '';
      stateEntity.epaRegion = 0;

      let stateDTO = new StateDTO();

      stateDTO = {
        stateCode: '',
        stateName: '',
        epaRegion: 0,
      };

      statesRepository.find.mockResolvedValue([stateEntity]);

      let result = await statesService.getAllStates();

      expect(statesRepository.find).toHaveBeenCalled();
      expect(result).toEqual([stateDTO]);
    });
  });
});
