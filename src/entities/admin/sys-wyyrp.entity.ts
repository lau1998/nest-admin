import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export const name = 'sys_wyyrp';

@Entity({ name })
export default class Wangyiyunreping {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  text: string;

  @Column({ type: 'tinyint', nullable: true, default: 1 })
  @ApiProperty()
  status: number;
}
