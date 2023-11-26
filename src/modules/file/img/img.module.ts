import { Module } from '@nestjs/common';
import { ImgService } from './img.service';
import sysImgList from 'src/entities/admin/sys-imglist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([sysImgList])],
  providers: [ImgService],
  exports: [ImgService],
})
export class ImgModule {}
