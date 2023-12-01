import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import Wangyiyunreping from 'src/entities/admin/sys-wyyrp.entity';
import { WyyrpService } from './wyyrp.service';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ADMIN_PREFIX } from '@/modules/admin/admin.constants';
import { Authorize } from 'src/modules/admin/core/decorators/authorize.decorator';
import { PageOptionsDto, PagepaginationDto } from 'src/common/dto/page.dto';
type Item = {
  list;
  pagination: PagepaginationDto;
};

@ApiSecurity(ADMIN_PREFIX)
@ApiTags('网易云热评')
@Controller('wyyrp')
export class WyyrpController {
  constructor(private readonly wyyrpService: WyyrpService) {}
  /** 随机查找某一条 */
  @ApiOperation({ summary: '随机获取一条' })
  @Get('random')
  @Authorize()
  async findRandomRecord(@Query('type') type?: string) {
    const res: Wangyiyunreping = await this.wyyrpService.findRandomRecord();
    return type === 'text' ? res.text : res;
  }

  @ApiOperation({ summary: '分页查询图片列表' })
  @Post('list')
  async loginLogPage(@Body() dto: PageOptionsDto): Promise<Promise<Item>> {
    const list = await this.wyyrpService.pageGetLists(dto.page - 1, dto.limit);
    const count = await this.wyyrpService.countAlbum();
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
