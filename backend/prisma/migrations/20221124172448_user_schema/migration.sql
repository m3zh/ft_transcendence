/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "uid" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "hash" TEXT,
    "avatar" TEXT,
    "intratoken" TEXT,
    "dblauth" BOOLEAN NOT NULL DEFAULT false,
    "mail" TEXT,
    "friends" TEXT[],
    "blacklist" TEXT[],
    "groups" TEXT[],

    CONSTRAINT "Users_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_mail_key" ON "Users"("mail");
