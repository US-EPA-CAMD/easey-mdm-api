import { Test } from '@nestjs/testing';

import { StatesController } from './states.controller';
import { StatesService } from './states.service';
import { StateMap } from '../maps/state.map';
import { StatesRepository } from './states.repository';
import { StateDTO } from '../dto/state.dto';

describe('-- States Controller --', () => {
  let statesController;
  let statesService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [StatesController],
      providers: [StatesService, StateMap, StatesRepository],
    }).compile();

    statesController = module.get(StatesController);
    statesService = module.get(StatesService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getAllStates', () => {
    it('should call the service and return a list of all states', async () => {
      const expectedResult: StateDTO[] = [];
      jest
        .spyOn(statesService, 'getAllStates')
        .mockResolvedValue(expectedResult);
      expect(await statesController.getAllStates()).toBe(expectedResult);
    });
  });
});
