import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ApiOkResponsePaginated } from 'src/common/class/res.class';
import { PageOptionsDto, PagepaginationDto } from 'src/common/dto/page.dto';
import { ADMIN_PREFIX } from '../../admin.constants';
import { ImgListInfo } from './img.class';
import { SysImgService } from './img.service';

type Gear = {
  list;
  pagination: PagepaginationDto;
};

@ApiSecurity(ADMIN_PREFIX)
@ApiTags('图片模块')
@Controller('img')
export class SysImgController {
  constructor(private imgService: SysImgService) {}

  @ApiOperation({ summary: '分页查询图片列表' })
  @ApiOkResponsePaginated(ImgListInfo)
  @Post('imglist')
  async loginLogPage(@Query() dto: PageOptionsDto): Promise<Promise<Gear>> {
    const list = await this.imgService.pageGetLoginLog(dto.page - 1, dto.limit);
    const count = await this.imgService.countLoginLog();
    return {
      list,
      pagination: {
        total: count,
        pagesize: dto.limit,
        page: dto.page,
      },
    };
  }
}
