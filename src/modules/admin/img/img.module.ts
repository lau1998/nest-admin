import { Module } from '@nestjs/common';
import { SysImgService } from './img.service';

@Module({
  providers: [SysImgService],
})
export class ImgModule {}
