import { IsString, IsOptional, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

class CreateBankAccountDto {
  @IsString() bankName: string;
  @IsString() accountName: string;
  @IsString() accountNumber: string;
  @IsOptional() @IsString() qrCodeImage?: string;
}

class CreateCommentDto {
  @IsString() message: string;
}

class CreateImageDto {
  @IsString() url: string;
  @IsOptional() @IsString() description?: string;
}

export class CreateWeddingCardDto {
  @IsString() brideName: string;
  @IsString() groomName: string;
  @IsString() path: string;
  @IsString() template: string;

  @IsOptional() @IsString() vanue?: string;
  @IsOptional() @IsString() organizationDay?: string;
  @IsOptional() @IsString() brideMother?: string;
  @IsOptional() @IsString() brideFather?: string;
  @IsOptional() @IsString() groomMother?: string;
  @IsOptional() @IsString() groomFather?: string;
  @IsOptional() @IsString() invitationText?: string;
  @IsOptional() @IsString() location?: string;
  @IsOptional() @IsString() mapLink?: string;
  @IsOptional() @IsString() theme?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateImageDto)
  images: CreateImageDto[];
}

export class WeddingDTO {
  @IsOptional() brideName?: string;
  @IsOptional() groomName?: string;
  @IsOptional() path?: string;
  @IsOptional() template?: string;
  @IsOptional() brideParents?: {
    fatherName?: string;
    motherName?: string;
  };
  @IsOptional() groomParents?: {
    fatherName?: string;
    motherName?: string;
  };
  organizationDay?: Date;
  venue?: string;
  invitationText?: string;
  location?: string;
  mapLink?: string;
  theme?: string;
  bankAccounts?: Array<CreateBankAccountDto>;
  comments?: Array<CreateCommentDto>;
  images?: Array<string>;
}
