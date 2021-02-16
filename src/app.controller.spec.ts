import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from './config/app.config';
import dbConfig from './config/db.config';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [dbConfig, appConfig],
        }),
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = module.get(AppController);
    appService = module.get(AppService);
    appService.getHello = jest.fn().mockReturnValue('Hello masterDataManagement!');
  });
  describe('getHello', () => {
    it('should return "Hello masterDataManagement!"', () => {
      expect(appController.getHello()).toBe('Hello masterDataManagement!');
    });
  });
});
