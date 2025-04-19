import { Test, TestingModule } from '@nestjs/testing';
import { WeddingCardController } from './wedding-card.controller';

describe('WeddingCardController', () => {
  let controller: WeddingCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeddingCardController],
    }).compile();

    controller = module.get<WeddingCardController>(WeddingCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
