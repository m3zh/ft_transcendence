/*
  Warnings:

  - You are about to drop the `GameOnUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GameOnUsers" DROP CONSTRAINT "GameOnUsers_gameId_fkey";

-- DropForeignKey
ALTER TABLE "GameOnUsers" DROP CONSTRAINT "GameOnUsers_playerId_fkey";

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "player1Id" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "player2Id" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "winnerId" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "GameOnUsers";
