/*
  Warnings:

  - A unique constraint covering the columns `[player1]` on the table `Game` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[player2]` on the table `Game` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "player1" TEXT,
ADD COLUMN     "player2" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Game_player1_key" ON "Game"("player1");

-- CreateIndex
CREATE UNIQUE INDEX "Game_player2_key" ON "Game"("player2");
