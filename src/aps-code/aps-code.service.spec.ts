import { Test, TestingModule } from '@nestjs/testing';
import { ApsCode } from '../entities/aps-code.entity';
import { ApsCodeRepository } from './aps-code.repository';
import { ApsCodeService } from './aps-code.service';

const apsCode = new ApsCode();
describe('ApsCodeService', () => {
  let service: ApsCodeService;
  let repository: ApsCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApsCodeService,
        {
          provide: ApsCodeRepository,
          useFactory: () => ({
            find: jest.fn().mockResolvedValue([apsCode]),
          }),
        },
      ],
    }).compile();

    service = module.get<ApsCodeService>(ApsCodeService);
    repository = module.get<ApsCodeRepository>(ApsCodeRepository);
  });

  describe('getApsCodes', () => {
    it('calls the getApsCodes and returns aps codes', async () => {
      const result = await service.getApsCodes();
      expect(result).toEqual([apsCode]);
      expect(repository.find).toHaveBeenCalled();
    });
  });
});
