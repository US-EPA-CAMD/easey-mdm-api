import { Test, TestingModule } from '@nestjs/testing';
import { MatsMethodCodeService } from './mats-method-code.service';

describe('MatsMethodCodeService', () => {
  let service: MatsMethodCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatsMethodCodeService],
    }).compile();

    service = module.get<MatsMethodCodeService>(MatsMethodCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
