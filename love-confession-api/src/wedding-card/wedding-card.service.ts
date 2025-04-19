// src/wedding-card/wedding-card.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWeddingCardDto, WeddingDTO } from './wedding-card.dto';
import { FirebaseService } from 'src/firebase/firebase.service';

@Injectable()
export class WeddingCardService {
  constructor(
    private prisma: PrismaService,
    private firebaseService: FirebaseService,
  ) {}

  async create(data: CreateWeddingCardDto, files: Express.Multer.File[]) {
    const uploadedImageUrls = await Promise.all(
      files.map(async (file) => {
        const url = await this.firebaseService.uploadFile(file);
        return { url };
      }),
    );

    return this.prisma.weddingCard.create({
      data: {
        brideName: data.brideName,
        groomName: data.groomName,
        path: data.path,
        template: data.template,
        brideFather: data.brideFather,
        brideMother: data.brideMother,
        groomFather: data.groomFather,
        groomMother: data.groomMother,
        invitationText: data.invitationText,
        location: data.location,
        mapLink: data.mapLink,
        theme: data.theme,
        images: {
          create: uploadedImageUrls, // Tạo từ URL ảnh đã upload
        },
      },
      include: {
        images: true,
      },
    });
  }

  async getWeddingCards() {
    return await this.prisma.weddingCard.findMany();
  }

  async getWeddingCardById(path: string): Promise<WeddingDTO> {
    const weddingCard = await this.prisma.weddingCard.findFirst({
      where: { path },
      include: {
        images: true,
      },
    });

    return {
      groomName: weddingCard?.groomName,
      brideName: weddingCard?.brideName,
      path: weddingCard?.path,
      template: weddingCard?.template || '',
      organizationDay: weddingCard?.organizationDay,
      venue: weddingCard?.venue || '',
      brideParents: {
        fatherName: weddingCard?.brideFather || '',
        motherName: weddingCard?.brideMother || '',
      },
      groomParents: {
        fatherName: weddingCard?.groomFather || '',
        motherName: weddingCard?.groomMother || '',
      },
      invitationText: weddingCard?.invitationText || '',
      location: weddingCard?.location || '',
      mapLink: weddingCard?.mapLink || '',
      theme: weddingCard?.theme || '',
      bankAccounts: [],
      comments: [],
      images: weddingCard?.images.map((image) => image.url) || [],
    };
  }
}
