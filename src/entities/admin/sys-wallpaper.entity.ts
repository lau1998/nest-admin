import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

export const name = 'sys_wallpaper_img';

@Entity({ name })
export default class SysWallpaperImg {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  url: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  short_url: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  views: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  favorites: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  source: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  purity: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  category: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  dimension_x: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  dimension_y: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  resolution: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  ratio: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  file_size: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  file_type: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  created_at: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  colors: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  path: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  thumbs: string;

  @Column({ type: 'varchar' })
  @ApiProperty()
  type: string;
}
