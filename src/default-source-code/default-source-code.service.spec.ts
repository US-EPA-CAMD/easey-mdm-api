import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { DefaultSourceCodeRepository } from './default-source-code.repository';
import { DefaultSourceCodeService } from './default-source-code.service';

const mockDefaultSourceCodeRepository = () => ({
  getDefaultSourceCodes: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('DefaultSourceCodeService', () => {
  let service: DefaultSourceCodeService;
  let repository: DefaultSourceCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        DefaultSourceCodeService,
        {
          provide: DefaultSourceCodeRepository,
          useFactory: mockDefaultSourceCodeRepository,
        },
      ],
    }).compile();

    service = module.get<DefaultSourceCodeService>(DefaultSourceCodeService);
    repository = module.get<DefaultSourceCodeRepository>(
      DefaultSourceCodeRepository,
    );
  });

  describe('getDefaultSourceCodes', () => {
    it('calls the DefaultSourceCodeRepository and returns default sources codes', async () => {
      const result = await service.getDefaultSourceCodes();
      expect(result).toEqual([]);
      expect(repository.getDefaultSourceCodes).toHaveBeenCalled();
    });
  });
});
