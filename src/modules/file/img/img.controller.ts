import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ApiOkResponsePaginated } from 'src/common/class/res.class';
import { PageOptionsDto } from 'src/common/dto/page.dto';
import { ImgListInfo } from './img.class';
import { ImgService } from './img.service';
import { ADMIN_PREFIX } from '@/modules/admin/admin.constants';
import { Authorize } from 'src/modules/admin/core/decorators/authorize.decorator';

type Gear = {
  list;
  total: number;
};

@ApiSecurity(ADMIN_PREFIX)
@ApiTags('电子相册图片模块')
@Controller('img/album')
export class ImgController {
  constructor(private imgService: ImgService) {}

  @ApiOperation({ summary: '电子相册图片列表' })
  @ApiOkResponsePaginated(ImgListInfo)
  @Get('imglist')
  @Authorize()
  async loginLogPage(@Query() dto: PageOptionsDto): Promise<Promise<Gear>> {
    const list = await this.imgService.GetAlbumList();
    const count = await this.imgService.countAlbum();
    return {
      list,
      total: count,
    };
  }
}
