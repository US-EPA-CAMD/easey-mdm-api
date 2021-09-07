import { Module } from '@nestjs/common';
import { SystemDesignationCodeService } from './system-designation-code.service';
import { SystemDesignationCodeController } from './system-designation-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemDesignationCodeRepository } from './system-designation-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SystemDesignationCodeRepository])],
  controllers: [SystemDesignationCodeController],
  providers: [SystemDesignationCodeService],
})
export class SystemDesignationCodeModule {}
