import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'sys_imglist' })
export default class SysImgist extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ name: 'desc', type: 'varchar', comment: '图片描述' })
  @ApiProperty()
  desc: string;

  @Column()
  @ApiProperty()
  category: string;

  @Column()
  @ApiProperty()
  reducePath: string;

  @Column({ type: 'path' })
  @ApiProperty()
  path: string;
}
