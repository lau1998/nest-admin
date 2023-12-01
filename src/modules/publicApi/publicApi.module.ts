import { Module } from '@nestjs/common';
import { WyyrpModule } from './wyyrp/wyyrp.module';
import { WyyrpController } from './wyyrp/wyyrp.controller';

/**
 * 公用Api模块
 */
@Module({
  imports: [WyyrpModule],
  controllers: [WyyrpController],
  exports: [WyyrpModule],
})
export class PublicApiModule {}
