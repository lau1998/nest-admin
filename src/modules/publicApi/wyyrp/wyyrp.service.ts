import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, In, Repository } from 'typeorm';
import { name } from 'src/entities/admin/sys-wyyrp.entity';
import Wangyiyunreping from 'src/entities/admin/sys-wyyrp.entity';

@Injectable()
export class WyyrpService {
  constructor(
    @InjectRepository(Wangyiyunreping)
    private readonly wyyrpRepository: Repository<Wangyiyunreping>,
    private readonly entityManager: EntityManager,
  ) {}

  /**
   * 计算总数
   */
  async countAlbum(): Promise<number> {
    const Ids = await this.wyyrpRepository
      .createQueryBuilder('wyyrp')
      .select(['wyyrp.id'])
      .getMany();
    return await this.wyyrpRepository.count({
      where: { id: In(Ids.map((n) => n.id)) },
    });
  }

  /**
   * 分页加载
   */
  async pageGetLists(page: number, count: number): Promise<Wangyiyunreping> {
    const skip = page * count; // 计算偏移量
    const take = count; // 设置限制数量
    let res: any = await this.wyyrpRepository.find({
      skip,
      take,
    });
    return res.map((item) => ({
      id: item.id,
      text: item.text,
      status: item.status,
    }));
  }

  /** 随机获一条 */
  async findRandomRecord() {
    try {
      const query = `SELECT * FROM ${name} ORDER BY RAND() LIMIT 1`;
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
}
