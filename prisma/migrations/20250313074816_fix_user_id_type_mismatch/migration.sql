/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `resetToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `tokenExpiry` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `verifyToken` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "SocialAccount" DROP CONSTRAINT "SocialAccount_userId_fkey";

-- DropForeignKey
ALTER TABLE "SocialPost" DROP CONSTRAINT "SocialPost_userId_fkey";

-- DropForeignKey
ALTER TABLE "SystemLog" DROP CONSTRAINT "SystemLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "Website" DROP CONSTRAINT "Website_userId_fkey";

-- DropIndex
DROP INDEX "User_resetToken_key";

-- DropIndex
DROP INDEX "User_verifyToken_key";

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "SocialAccount" ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "SocialPost" ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "SystemLog" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "password",
DROP COLUMN "resetToken",
DROP COLUMN "tokenExpiry",
DROP COLUMN "verified",
DROP COLUMN "verifyToken",
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "hashedPassword" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "verificationToken" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AlterTable
ALTER TABLE "Website" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Website" ADD CONSTRAINT "Website_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialAccount" ADD CONSTRAINT "SocialAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialPost" ADD CONSTRAINT "SocialPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SystemLog" ADD CONSTRAINT "SystemLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
