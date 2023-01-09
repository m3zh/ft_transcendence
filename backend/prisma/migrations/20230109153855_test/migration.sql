/*
  Warnings:

  - You are about to drop the `GameOnUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GameOnUsers" DROP CONSTRAINT "GameOnUsers_gameId_fkey";

-- DropForeignKey
ALTER TABLE "GameOnUsers" DROP CONSTRAINT "GameOnUsers_playerId_fkey";

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "usersUid" INTEGER;

-- DropTable
DROP TABLE "GameOnUsers";

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_usersUid_fkey" FOREIGN KEY ("usersUid") REFERENCES "Users"("uid") ON DELETE SET NULL ON UPDATE CASCADE;
