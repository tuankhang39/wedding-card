import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { WeddingCardModule } from './wedding-card/wedding-card.module';
import { FireBaseModule } from './firebase/firebase.module';

@Module({
  imports: [PrismaModule, WeddingCardModule, FireBaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
