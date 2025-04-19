/*
  Warnings:

  - The `organizationDay` column on the `WeddingCard` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "WeddingCard" DROP COLUMN "organizationDay",
ADD COLUMN     "organizationDay" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
