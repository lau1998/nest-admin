import { Test, TestingModule } from '@nestjs/testing';
import { WyyrpController } from './wyyrp.controller';

describe('WyyrpController', () => {
  let controller: WyyrpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WyyrpController],
    }).compile();

    controller = module.get<WyyrpController>(WyyrpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
