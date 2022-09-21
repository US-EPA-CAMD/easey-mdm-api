import { Test } from '@nestjs/testing';

import { ControlTechnologyService } from './control-technology.service';
import { ControlTechnologyController } from './control-technology.controller';
import { ControlTechnologyRepository } from './control-technology.repository';
import { ControlTechnologyMap } from '../maps/control-technology.map';
import { ControlTechnologyDTO } from '../dto/control-technology.dto';

describe('ControlTechnologyController', () => {
  let service: ControlTechnologyService;
  let controller: ControlTechnologyController;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [ControlTechnologyController],
      providers: [
        ControlTechnologyMap,
        ControlTechnologyService,
        ControlTechnologyRepository
      ],
    }).compile();

    service = module.get(ControlTechnologyService);
    controller = module.get(ControlTechnologyController);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });

  describe('getControlTechnologies', () => {
    
    it('should return a list of control technologies', async () => {
      const expectedResult: ControlTechnologyDTO[] = [];

      jest.spyOn(
        service,
        'getControlTechnologies'
      ).mockResolvedValue(
        expectedResult
      );

      expect(
        await controller.getControlTechnologies()
      ).toBe(
        expectedResult
      );
    });

  });
});
