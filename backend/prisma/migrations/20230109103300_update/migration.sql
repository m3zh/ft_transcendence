/*
  Warnings:

  - You are about to drop the column `usersUid` on the `Game` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_usersUid_fkey";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "usersUid";

-- CreateTable
CREATE TABLE "GameOnUsers" (
    "playerId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "GameOnUsers_pkey" PRIMARY KEY ("playerId","gameId")
);

-- AddForeignKey
ALTER TABLE "GameOnUsers" ADD CONSTRAINT "GameOnUsers_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Users"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameOnUsers" ADD CONSTRAINT "GameOnUsers_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
