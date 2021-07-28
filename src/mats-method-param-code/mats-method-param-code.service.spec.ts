import { Test, TestingModule } from '@nestjs/testing';
import { MatsMethodParamCodeService } from './mats-method-param-code.service';

describe('MatsMethodParamCodeService', () => {
  let service: MatsMethodParamCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatsMethodParamCodeService],
    }).compile();

    service = module.get<MatsMethodParamCodeService>(MatsMethodParamCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
