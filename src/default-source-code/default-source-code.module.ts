import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefaultSourceCodeService } from './default-source-code.service';
import { DefaultSourceCodeController } from './default-source-code.controller';
import { DefaultSourceCodeRepository } from './default-source-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DefaultSourceCodeRepository])],
  controllers: [DefaultSourceCodeController],
  providers: [DefaultSourceCodeService],
})
export class DefaultSourceCodeModule {}
