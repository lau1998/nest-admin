import { Test, TestingModule } from '@nestjs/testing';
import { WyyrpService } from './wyyrp.service';

describe('WyyrpService', () => {
  let service: WyyrpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WyyrpService],
    }).compile();

    service = module.get<WyyrpService>(WyyrpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
