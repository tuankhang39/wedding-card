-- CreateTable
CREATE TABLE "WeddingCard" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "template" TEXT NOT NULL DEFAULT 'template1',
    "brideName" TEXT NOT NULL,
    "groomName" TEXT NOT NULL,
    "brideFather" TEXT,
    "brideMother" TEXT,
    "groomMother" TEXT,
    "groomFather" TEXT,
    "invitationText" TEXT,
    "location" TEXT,
    "venue" TEXT,
    "mapLink" TEXT,
    "qrCodeImage" TEXT,
    "theme" TEXT,
    "organizationDay" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WeddingCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weddingCardId" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "weddingCardId" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankAccount" (
    "id" SERIAL NOT NULL,
    "bankName" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "qrCodeImage" TEXT,
    "weddingCardId" INTEGER NOT NULL,

    CONSTRAINT "BankAccount_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_weddingCardId_fkey" FOREIGN KEY ("weddingCardId") REFERENCES "WeddingCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_weddingCardId_fkey" FOREIGN KEY ("weddingCardId") REFERENCES "WeddingCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankAccount" ADD CONSTRAINT "BankAccount_weddingCardId_fkey" FOREIGN KEY ("weddingCardId") REFERENCES "WeddingCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
