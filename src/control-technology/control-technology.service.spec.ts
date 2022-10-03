import { Test } from '@nestjs/testing';

import { ControlTechnologyRepository } from './control-technology.repository';
import { ControlTechnologyService } from './control-technology.service';
import { ControlTechnologyMap } from '../maps/control-technology.map';

const mockRepository = () => ({
  getControlTechnologies: jest.fn(),
});

describe('ControlTechnologyService', () => {
  let repository: any;
  let service: ControlTechnologyService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ControlTechnologyMap,
        ControlTechnologyService,
        {
          provide: ControlTechnologyRepository,
          useFactory: mockRepository,
        },
      ],
    }).compile();

    service = module.get(ControlTechnologyService);
    repository = module.get(ControlTechnologyRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('getControlTechnologies', () => {

    it('should return a list of control technologies', async () => {
      repository.getControlTechnologies.mockResolvedValue([]);
      const results = await service.getControlTechnologies();

      expect(repository.getControlTechnologies).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });
});
