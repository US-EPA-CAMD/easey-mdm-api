import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefaultPurposeCodeService } from './default-purpose-code.service';
import { DefaultPurposeCodeController } from './default-purpose-code.controller';
import { DefaultPurposeCodeRepository } from './default-purpose-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DefaultPurposeCodeRepository])],
  controllers: [DefaultPurposeCodeController],
  providers: [DefaultPurposeCodeService],
})
export class DefaultPurposeCodeModule {}
