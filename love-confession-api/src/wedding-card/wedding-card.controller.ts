// src/wedding-card/wedding-card.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { WeddingCardService } from './wedding-card.service';
import { CreateWeddingCardDto } from './wedding-card.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('wedding-cards')
export class WeddingCardController {
  constructor(private readonly weddingCardService: WeddingCardService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('images'))
  createWeddingCard(
    @Body() body: CreateWeddingCardDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.weddingCardService.create(body, files);
  }
  @Get()
  async findAll() {
    return await this.weddingCardService.getWeddingCards();
  }

  @Get(':path')
  async findOne(@Param('path') path: string) {
    return await this.weddingCardService.getWeddingCardById(path);
  }
}
