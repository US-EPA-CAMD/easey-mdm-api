import { Test, TestingModule } from '@nestjs/testing';
import { ParameterCodeService } from './parameter-code.service';

describe('ParameterCodeService', () => {
  let service: ParameterCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParameterCodeService],
    }).compile();

    service = module.get<ParameterCodeService>(ParameterCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
