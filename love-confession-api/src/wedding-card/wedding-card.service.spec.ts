import { Test, TestingModule } from '@nestjs/testing';
import { WeddingCardService } from './wedding-card.service';

describe('WeddingCardService', () => {
  let service: WeddingCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeddingCardService],
    }).compile();

    service = module.get<WeddingCardService>(WeddingCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
