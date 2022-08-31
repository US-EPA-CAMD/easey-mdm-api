import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialCodeService } from './material-code.service';
import { MaterialCodeController } from './material-code.controller';
import { MaterialCodeRepository } from './material-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MaterialCodeRepository])],
  controllers: [MaterialCodeController],
  providers: [MaterialCodeService],
})
export class MaterialCodeModule {}
