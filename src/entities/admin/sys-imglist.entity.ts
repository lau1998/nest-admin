import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'sys_img_list' })
export default class SysImgList extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({
    name: 'desc',
    nullable: true,
    type: 'varchar',
    comment: '图片描述',
  })
  @ApiProperty()
  desc: string;

  @Column({ nullable: true, type: 'int', default: 1 })
  @ApiProperty()
  status: number;

  @Column({ type: 'varchar', nullable: true, comment: '分类' })
  @ApiProperty()
  category: string;

  @Column({ type: 'varchar', nullable: true, comment: '压缩图地址' })
  @ApiProperty()
  reducePath: string;

  @Column({ type: 'varchar', nullable: true, comment: '原图地址' })
  @ApiProperty()
  path: string;
}
