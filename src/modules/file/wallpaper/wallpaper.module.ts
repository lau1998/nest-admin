import { Module } from '@nestjs/common';
import { WallpaperService } from './wallpaper.service';
import SysWallpaperImg from 'src/entities/admin/sys-wallpaper.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forFeature([SysWallpaperImg]),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [WallpaperService],
  exports: [WallpaperService],
})
export class WallpaperModule {}
