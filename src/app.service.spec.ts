import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import appConfig from './config/app.config';
import dbConfig from './config/db.config';

describe('AppService', () => {
  let appService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [dbConfig, appConfig],
        }),
      ],

      providers: [AppService],
    }).compile();

    appService = module.get(AppService);
  });

  describe('getHello', () => {
    it('should return "Hello masterDataManagement!', async () => {
      expect(appService.getHello()).toBe('Hello masterDataManagement!');
    });
  });
});
