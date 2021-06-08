import { Test } from '@nestjs/testing';

import { ControlTechnologiesService } from './control-technologies.service';
import { ControlTechnologyRepository } from './control-code.repository';
import { ControlTechnologyMap } from '../maps/control-technology.map';
import { ControlTechnology } from '../entities/control-code.entity';
import { ControlEquipParam } from '../entities/control-equip-param-code.entity';
import { ControlTechnologyDTO } from '../dto/control-technology.dto';

const mockControlTechnologiesRepository = () => ({
  getAllControlTechnologies: jest.fn(),
});

describe('-- Control Technologies Service --', () => {
  let controlTechnologiesService;
  let controlTechnologyRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ControlTechnologiesService,
        {
          provide: ControlTechnologyRepository,
          useFactory: mockControlTechnologiesRepository,
        },
        ControlTechnologyMap,
      ],
    }).compile();

    controlTechnologiesService = module.get(ControlTechnologiesService);
    controlTechnologyRepository = module.get(ControlTechnologyRepository);
  });

  describe('getAllControlTechnologies', () => {
    it('calls repository.getAllControlTechnologies() and returns all valid control technologies', async () => {
      let controlTechnologyEntity: ControlTechnology = new ControlTechnology();
      controlTechnologyEntity.controlCode = '';
      controlTechnologyEntity.controlDescription = '';
      controlTechnologyEntity.controlEquipParamCode = '';

      const controlTechnologyDTO: ControlTechnologyDTO = {
        controlCode: '',
        controlDescription: '',
        controlEquipParamCode: '',
        controlEquipParamDescription: null,
      };

      controlTechnologyRepository.getAllControlTechnologies.mockResolvedValue([
        controlTechnologyEntity,
      ]);

      let result = await controlTechnologiesService.getAllControlTechnologies();

      expect(
        controlTechnologyRepository.getAllControlTechnologies,
      ).toHaveBeenCalled();
      expect(result).toEqual([controlTechnologyDTO]);
    });
  });
});
