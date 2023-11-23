import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, In, Repository } from 'typeorm';
import { PageImgList } from './img.class';
import sysImglist from 'src/entities/admin/sys-imglist.entity';

@Injectable()
export class SysImgService {
  // private readonly apiUrl = 'https://wallhaven.cc/api/v1/search';
  // private readonly apiKey = 'Vr7khHqGuxwuV29hkvTYkvTBIpv8HmQR';

  constructor(
    private readonly entityManager: EntityManager,
    @InjectRepository(sysImglist)
    private userRepository: Repository<sysImglist>,
  ) {}

  async findRandomRecord(type) {
    try {
      const query = `SELECT *
        FROM imglist_beauty
        WHERE category = ${type}
        ORDER BY RAND()
        LIMIT 1;
        `;
      const result = await this.entityManager.query(query);

      if (result && result.length > 0) {
        return result[0];
      } else {
        throw new Error('No records found.');
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   * 计算图片总数
   */
  async countLoginLog(): Promise<number> {
    const imgIds = await this.userRepository
      .createQueryBuilder('imglist')
      .select(['user.id'])
      .getMany();
    return await this.userRepository.count({
      where: { id: In(imgIds) },
    });
  }

  // /**
  //  * 分页加载图片信息
  //  */
  // async pageGetLoginLog(page: number, count: number): Promise<PageImgList[]> {
  //   const imgIds = await this.userRepository
  //     .createQueryBuilder('imglist')
  //     .select(['user.id'])
  //     .getMany();
  //   const imgs = await this.userRepository.findBy({ id: In(imgIds) });
  //   return imgs;
  // }
}
