import { Module } from '@nestjs/common';
import { ImgModule } from './img/img.module';
import { ImgController } from './img/img.controller';
import { WallpaperModule } from './wallpaper/wallpaper.module';
import { WallpaperController } from './wallpaper/wallpaper.controller';
/**
 * Admin模块，所有API都需要加入/admin前缀
 */
@Module({
  imports: [ImgModule, WallpaperModule],
  controllers: [ImgController, WallpaperController],
  exports: [ImgModule, WallpaperModule],
})
export class FileModule {}
