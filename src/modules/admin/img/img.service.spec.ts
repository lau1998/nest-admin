import { Test, TestingModule } from '@nestjs/testing';
import { SysImgService } from './img.service';

describe('SysImgService', () => {
  let service: SysImgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SysImgService],
    }).compile();

    service = module.get<SysImgService>(SysImgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
