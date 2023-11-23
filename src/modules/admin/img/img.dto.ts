import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { PageOptionsDto } from 'src/common/dto/page.dto';

export class PageImgListDto extends PageOptionsDto {
  @ApiProperty({
    required: false,
    description: '图片描述',
  })
  @IsString()
  @IsOptional()
  desc: string;

  @ApiProperty({
    required: false,
    description: '分类',
  })
  @IsString()
  @IsOptional()
  category: string;

  @ApiProperty({
    required: false,
    description: '图片压缩后的路径',
  })
  @IsString()
  @IsOptional()
  reducePath: string;

  @ApiProperty({
    required: false,
    description: '原图偏的路径',
  })
  @IsString()
  @IsOptional()
  path: string;
}
