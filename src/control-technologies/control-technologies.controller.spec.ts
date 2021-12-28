import { Test } from '@nestjs/testing';

import { ControlTechnologiesService } from './control-technologies.service';
import { ControlTechnologiesController } from './control-technologies.controller';
import { ControlTechnologyRepository } from './control-code.repository';
import { ControlTechnologyMap } from '../maps/control-technology.map';
import { ControlTechnologyDTO } from 'src/dto/control-technology.dto';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

describe('-- Control Technologies Controller --', () => {
  let controlTechnologiesController;
  let controlTechnologiesService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [LoggerModule],
      controllers: [ControlTechnologiesController],
      providers: [
        ControlTechnologiesService,
        ControlTechnologyMap,
        ControlTechnologyRepository,
      ],
    }).compile();

    controlTechnologiesController = module.get(ControlTechnologiesController);
    controlTechnologiesService = module.get(ControlTechnologiesService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getAllControlTechnologies', () => {
    it('should call the service and return a list of valid control technologies', async () => {
      const expectedResult: ControlTechnologyDTO[] = [];
      jest
        .spyOn(controlTechnologiesService, 'getAllControlTechnologies')
        .mockResolvedValue(expectedResult);
      expect(
        await controlTechnologiesController.getAllControlTechnologies(),
      ).toBe(expectedResult);
    });
  });
});
