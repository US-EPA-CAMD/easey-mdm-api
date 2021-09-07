import { Test, TestingModule } from '@nestjs/testing';
import { AcquisitionMethodCodeController } from './acquisition-method-code.controller';
import { AcquisitionMethodCodeService } from './acquisition-method-code.service';

describe('AcquisitionMethodCodeController', () => {
  let controller: AcquisitionMethodCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcquisitionMethodCodeController],
      providers: [AcquisitionMethodCodeService],
    }).compile();

    controller = module.get<AcquisitionMethodCodeController>(AcquisitionMethodCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
