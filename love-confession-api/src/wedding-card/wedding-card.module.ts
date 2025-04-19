import { Module } from '@nestjs/common';
import { WeddingCardService } from './wedding-card.service';
import { WeddingCardController } from './wedding-card.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { FireBaseModule } from 'src/firebase/firebase.module';

@Module({
  providers: [WeddingCardService],
  controllers: [WeddingCardController],
  imports: [PrismaModule, FireBaseModule],
})
export class WeddingCardModule {}
