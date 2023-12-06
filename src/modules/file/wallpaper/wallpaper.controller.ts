import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ApiOkResponsePaginated } from 'src/common/class/res.class';
import {
  PageOptionsDto,
  PagepaginationDto,
} from 'src/common/dto/wallpaper.page.dto';
import { WallpaperService } from './wallpaper.service';
import { ADMIN_PREFIX } from '@/modules/admin/admin.constants';
import { Authorize } from 'src/modules/admin/core/decorators/authorize.decorator';
import SysWallpaperImg from 'src/entities/admin/sys-wallpaper.entity';

type GearList = {
  list;
};
type Gear = {
  list;
  pagination: PagepaginationDto;
};

@ApiSecurity(ADMIN_PREFIX)
@ApiTags('壁纸图片模块')
@Controller('img/wallpaper')
export class WallpaperController {
  constructor(private WallpaperService: WallpaperService) {}

  @ApiOperation({ summary: '分页查询壁纸图片列表' })
  @ApiOkResponsePaginated(SysWallpaperImg)
  @Post('imglist')
  @Authorize()
  async loginLogPage(@Body() dto: PageOptionsDto): Promise<Promise<Gear>> {
    const list = await this.WallpaperService.pageGetLoginLog(
      dto.page - 1,
      dto.limit,
      dto.purity,
    );
    const count = await this.WallpaperService.countLoginLog();
    return {
      list,
      pagination: {
        total: count,
        pagesize: dto.limit,
        page: dto.page,
      },
    };
  }

  @ApiOperation({ summary: '爬取壁纸数据' })
  @ApiOkResponsePaginated(SysWallpaperImg)
  @Get('getWallpaper')
  @Authorize()
  async getWallpaperFn(@Query() query): Promise<Promise<GearList>> {
    const list = await this.WallpaperService.getWallhavenData(query);
    return {
      list,
    };
  }
}
