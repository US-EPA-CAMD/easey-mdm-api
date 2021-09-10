import { Module } from '@nestjs/common';
import { BasisCodeService } from './basis-code.service';
import { BasisCodeController } from './basis-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasisCodeRepository } from './basis-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BasisCodeRepository])],
  controllers: [BasisCodeController],
  providers: [BasisCodeService],
})
export class BasisCodeModule {}
