import { Module } from '@nestjs/common';
import { SubDataCodeService } from './sub-data-code.service';
import { SubDataCodeController } from './sub-data-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubDataCodeRepository } from './sub-data-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SubDataCodeRepository])],
  controllers: [SubDataCodeController],
  providers: [SubDataCodeService],
})
export class SubDataCodeModule {}
