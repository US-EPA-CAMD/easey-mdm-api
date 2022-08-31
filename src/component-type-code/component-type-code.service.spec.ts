import { Test, TestingModule } from '@nestjs/testing';

import { ComponentTypeCodeService } from './component-type-code.service';
import { ComponentTypeCodeRepository } from './component-type-code.repository';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

const mockComponentTypeCodeRepository = () => ({
  getComponentTypeCodes: jest.fn(() => []),
});

describe('ComponentTypeCodeService', () => {
  let service: ComponentTypeCodeService;
  let repository: ComponentTypeCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        ComponentTypeCodeService,
        {
          provide: ComponentTypeCodeRepository,
          useFactory: mockComponentTypeCodeRepository,
        },
      ],
    }).compile();

    service = module.get<ComponentTypeCodeService>(ComponentTypeCodeService);
    repository = module.get<ComponentTypeCodeRepository>(
      ComponentTypeCodeRepository,
    );
  });

  describe('getBypassApproachCodes', () => {
    it('calls ComponentTypeCodeReposiroty.getBypassApproachCodes and returns the result', async () => {
      const result = await service.getComponentTypeCodes();
      expect(result).toEqual([]);
      expect(repository.getComponentTypeCodes).toHaveBeenCalled();
    });
  });
});
