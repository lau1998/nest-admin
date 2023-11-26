import { Module } from '@nestjs/common';
import { ImgModule } from './img/img.module';
import { ImgController } from './img/img.controller';

/**
 * Admin模块，所有API都需要加入/admin前缀
 */
@Module({
  imports: [ImgModule],
  controllers: [ImgController],
  exports: [ImgModule],
})
export class FileModule {}
