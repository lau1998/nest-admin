import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import sysImgList from 'src/entities/admin/sys-imglist.entity';
import { In, Repository } from 'typeorm';
import { ImgListInfo } from './img.class';
import { UtilService } from '@/shared/services/util.service';

type Gear = {
  id: number;
  desc: string;
  category: string;
  reducePath: string;
  image: string;
}[];

@Injectable()
export class SysImgService {
  constructor(
    @InjectRepository(sysImgList)
    private readonly imgRepository: Repository<sysImgList>,
  ) {}

  /**
   * 计算图片总数
   */
  async countLoginLog(): Promise<number> {
    const imgIds = await this.imgRepository
      .createQueryBuilder('imgList')
      .select(['imgList.id'])
      .getMany();
    return await this.imgRepository.count({
      where: { id: In(imgIds.map((n) => n.id)) },
    });
  }

  /**
   * 分页加载
   */
  async pageGetLoginLog(page: number, count: number): Promise<Gear[]> {
    const skip = page * count; // 计算偏移量
    const take = count; // 设置限制数量
    let res: any = await this.imgRepository.find({
      skip,
      take,
    });
    return res.map((item) => ({
      id: item.id,
      desc: item.desc,
      category: item.category,
      image: item.path,
      reducePath: item.reducePath,
    }));
  }
}
