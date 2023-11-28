import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'sys_department' })
export default class SysDepartment extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ name: 'parent_id', nullable: true })
  @ApiProperty()
  parentId: number;

  @Column()
  @ApiProperty()
  name: string;

  @Column({ nullable: true, type: 'int', default: 1 })
  @ApiProperty()
  status: number;

  @Column({ name: 'order_num', type: 'int', nullable: true, default: 0 })
  @ApiProperty()
  orderNum: number;
}
