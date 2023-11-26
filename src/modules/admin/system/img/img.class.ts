import { ApiProperty } from '@nestjs/swagger';

export class ImgListInfo {
  @ApiProperty({ description: 'id' })
  id: number;

  @ApiProperty({ description: '图片描述' })
  desc: string;

  @ApiProperty({ description: '图片类型' })
  category: string;

  @ApiProperty({ description: '压缩图地址' })
  reducePath: string;

  @ApiProperty({ description: '原图地址' })
  path: string;
}
