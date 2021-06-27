import { Test, TestingModule } from '@nestjs/testing';
import { SubDataCodeController } from './sub-data-code.controller';
import { SubDataCodeService } from './sub-data-code.service';

describe('SubDataCodeController', () => {
  let controller: SubDataCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubDataCodeController],
      providers: [SubDataCodeService],
    }).compile();

    controller = module.get<SubDataCodeController>(SubDataCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
