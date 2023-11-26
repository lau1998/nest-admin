import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import sysImgList from 'src/entities/admin/sys-imglist.entity';
import { In, Repository } from 'typeorm';

type Gear = {
  [key: string]: {
    id: number;
    desc: string;
    category: string;
    reducePath: string;
    image: string;
  };
};

@Injectable()
export class ImgService {
  constructor(
    @InjectRepository(sysImgList)
    private readonly imgRepository: Repository<sysImgList>,
  ) {}

  /**
   * 计算图片总数
   */
  async countAlbum(): Promise<number> {
    const imgIds = await this.imgRepository
      .createQueryBuilder('imgList')
      .select(['imgList.id'])
      .getMany();
    return await this.imgRepository.count({
      where: { id: In(imgIds.map((n) => n.id)) },
    });
  }

  /**
   * 加载电子相册
   */
  async GetAlbumList(): Promise<Gear> {
    let res = await this.imgRepository.find();
    return Object.entries(res).reduce((result, [key, item]) => {
      const category = item.category;
      const id = item.id;
      const gearKey = `${category} ${id}`;
      result[gearKey] = {
        id,
        desc: item.desc,
        category,
        image: item.path,
        reducePath: item.reducePath,
      };
      return result;
    }, {});
  }
}
