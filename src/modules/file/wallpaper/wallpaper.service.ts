import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import SysWallpaperImg from 'src/entities/admin/sys-wallpaper.entity';
import { In, Repository } from 'typeorm';
import axios from 'axios';

@Injectable()
export class WallpaperService {
  constructor(
    @InjectRepository(SysWallpaperImg)
    private readonly imgRepository: Repository<SysWallpaperImg>,
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
  async pageGetLoginLog(
    page: number,
    count: number,
    purity: string,
  ): Promise<SysWallpaperImg[]> {
    const skip = page * count; // 计算偏移量
    const take = count; // 设置限制数量
    let res: any = await this.imgRepository.find({
      skip,
      take,
      where: {
        // 定义查询条件
        purity,
      },
    });
    return res.map((item) => ({
      ...item,
      colors: JSON.parse(item.colors),
      thumbs: JSON.parse(item.thumbs),
    }));
  }

  /** 从壁纸网站https://wallhaven.cc/help/api#changes爬取数据添加到数据库 */
  async getWallhavenData(query) {
    // const url = `https://wallhaven.cc/api/v1/search?${query}`;
    const url = `https://wallhaven.cc/api/v1/tag/1`;
    const headers = {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    };
    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      // 处理错误
      console.error('从Wallhaven获取数据出错:', error.message);
      throw error;
    }
  }
}
