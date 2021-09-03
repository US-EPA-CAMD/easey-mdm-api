import { Test, TestingModule } from '@nestjs/testing';
import { AcquisitionMethodCodeService } from './acquisition-method-code.service';

describe('AcquisitionMethodCodeService', () => {
  let service: AcquisitionMethodCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcquisitionMethodCodeService],
    }).compile();

    service = module.get<AcquisitionMethodCodeService>(AcquisitionMethodCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
