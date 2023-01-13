/*
  Warnings:

  - You are about to drop the `Friends` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Friends";

-- CreateTable
CREATE TABLE "friends" (
    "id" SERIAL NOT NULL,
    "requester" TEXT NOT NULL,
    "status" TEXT,
    "friends" TEXT,

    CONSTRAINT "friends_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "friends_requester_key" ON "friends"("requester");
