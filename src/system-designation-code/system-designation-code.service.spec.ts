import { Test, TestingModule } from '@nestjs/testing';
import { SystemDesignationCodeService } from './system-designation-code.service';

describe('SystemDesignationCodeService', () => {
  let service: SystemDesignationCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemDesignationCodeService],
    }).compile();

    service = module.get<SystemDesignationCodeService>(SystemDesignationCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
