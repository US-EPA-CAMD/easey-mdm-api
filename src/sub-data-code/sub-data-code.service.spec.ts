import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { SubDataCodeRepository } from './sub-data-code.repository';
import { SubDataCodeService } from './sub-data-code.service';

const mockSubDataCodeRepository = () => ({
  getSubDataCodes: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('SubDataCodeService', () => {
  let subDataCodeService: SubDataCodeService;
  let subDataCodeRepository: SubDataCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        SubDataCodeService,
        {
          provide: SubDataCodeRepository,
          useFactory: mockSubDataCodeRepository,
        },
      ],
    }).compile();

    subDataCodeService = module.get<SubDataCodeService>(SubDataCodeService);
    subDataCodeRepository = module.get<SubDataCodeRepository>(
      SubDataCodeRepository,
    );
  });

  describe('getSubDataCodes', () => {
    it('calls the SubDataCodeRepository and returns sub data codes', async () => {
      const result = await subDataCodeService.getSubDataCodes();
      expect(result).toEqual([]);
      expect(subDataCodeRepository.getSubDataCodes).toHaveBeenCalled();
    });
  });

  // describe('getSubDataCode', () => {
  //   it('calls the SubDataCodeRepository.findOne and return a result', async () => {
  //     subDataCodeRepository.findOne.mockResolvedValue('someValue');
  //     const result = await subDataCodeService.getSubDataCode('id');
  //     expect(result).toEqual('someValue');
  //   });
  // });

  // describe('updateSubDataCode', () => {
  //   it('calls the SubDataCodeService.getSubDataCode and return a result', async () => {
  //     subDataCodeRepository.findOne.mockResolvedValue('someValue');
  //     const result = await subDataCodeService.getSubDataCode('id');
  //     expect(result).toEqual('someValue');
  //   });
  // });
});
