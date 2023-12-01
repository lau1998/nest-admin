import { Module } from '@nestjs/common';
import { WyyrpService } from './wyyrp.service';
import Wangyiyunreping from 'src/entities/admin/sys-wyyrp.entity';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Wangyiyunreping])],
  providers: [WyyrpService],
  exports: [WyyrpService],
})
export class WyyrpModule {}
