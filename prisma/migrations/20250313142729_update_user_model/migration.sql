/*
  Warnings:

  - You are about to drop the column `hashedPassword` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" 
-- 添加所有新字段
ADD COLUMN "lastLogin" TIMESTAMP(3),
ADD COLUMN "resetPasswordExpiration" TIMESTAMP(3),
ADD COLUMN "resetPasswordToken" TEXT,
ADD COLUMN "verificationCode" TEXT,
ADD COLUMN "verified" BOOLEAN NOT NULL DEFAULT false,
-- 添加password字段，默认为空字符串（稍后会更新）
ADD COLUMN "password" TEXT NOT NULL DEFAULT '';

-- 将现有hashedPassword数据复制到password字段
UPDATE "User" SET "password" = "hashedPassword" WHERE "hashedPassword" IS NOT NULL;

-- 更新没有hashedPassword的用户添加随机密码，需要重置
UPDATE "User" SET "password" = concat('RESET_', md5(random()::text)) WHERE "hashedPassword" IS NULL;

-- 删除旧的hashedPassword字段
ALTER TABLE "User" DROP COLUMN "hashedPassword";
