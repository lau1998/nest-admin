import { ApiProperty } from '@nestjs/swagger';

export class PageImgList {
  @ApiProperty()
  desc: string;

  @ApiProperty()
  category: number;

  @ApiProperty()
  reducePath: string;

  @ApiProperty()
  path: string;
}
