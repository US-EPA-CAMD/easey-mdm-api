import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemTypeCodeRepository } from './system-type-code.repository';
import { SystemTypeCodeController } from './system-type-code.controller';
import { SystemTypeCodeService } from './system-type-code.service';

@Module({
  imports: [TypeOrmModule.forFeature([SystemTypeCodeRepository])],
  controllers: [SystemTypeCodeController],
  providers: [SystemTypeCodeService],
})
export class SystemTypeCodeModule {}
