import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  ApiOkResponse,
  ApiOperation,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import sysImglist from 'src/entities/admin/sys-imglist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PageImgListDto } from './img.dto';
import {
  ApiOkResponsePaginated,
  PaginatedResponseDto,
} from 'src/common/class/res.class';
import { PageImgList } from './img.class';
import { PageOptionsDto } from 'src/common/dto/page.dto';
import { SysImgService } from './img.service';

type Gear = {
  [key: string]: {
    category: string;
    image: string;
    desc: string;
  };
};

@Controller('imgList')
export class ImgController {
  constructor(
    @InjectRepository(sysImglist)
    private readonly imgRepository: Repository<sysImglist>,
  ) // private readonly ImgService: SysImgService,
  {}

  @ApiOperation({ summary: '分页查询图片列表' })
  @ApiOkResponsePaginated(PageImgList)
  // @Get('imgList/page')
  // async loginLogPage(
  //   @Query() dto: PageOptionsDto,
  // ): Promise<PaginatedResponseDto<PageImgList>> {
  //   const list = await this.ImgService.pageGetLoginLog(dto.page - 1, dto.limit);
  //   const count = await this.ImgService.countLoginLog();
  //   return {
  //     list,
  //     pagination: {
  //       total: count,
  //       size: dto.limit,
  //       page: dto.page,
  //     },
  //   };
  // }
  //查找全部
  @Post('findAll')
  async findAll(): Promise<Gear> {
    let res = await this.imgRepository.find();
    return Object.entries(res).reduce((result, [key, item]) => {
      const category = item.category;
      const id = item.id;
      const gearKey = `${category} ${id}`;

      result[gearKey] = {
        category: category,
        image: item.path,
        desc: item.desc,
        reducePath: item.reducePath,
      };
      return result;
    }, {});
  }
  //查找某一条
  @Post('findOne')
  async findOne(@Body('id') id: number): Promise<Gear> {
    let res = await await this.imgRepository.findOneBy({
      id: id, // where id is your column name
    });
    return Object.entries({ res }).reduce((result, [key, item]) => {
      const category = item.category;
      const id = item.id;
      const gearKey = `${category} ${id}`;

      result[gearKey] = {
        category: category,
        image: item.path,
        desc: item.desc,
        reducePath: item.reducePath,
      };
      return result;
    }, {});
  }
}
