import { Test, TestingModule } from '@nestjs/testing';
import { ReferenceMethodCodeController } from './reference-method-code.controller';
import { ReferenceMethodCodeService } from './reference-method-code.service';

describe('ReferenceMethodCodeController', () => {
  let controller: ReferenceMethodCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReferenceMethodCodeController],
      providers: [ReferenceMethodCodeService],
    }).compile();

    controller = module.get<ReferenceMethodCodeController>(ReferenceMethodCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
