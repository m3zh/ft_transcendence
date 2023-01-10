/*
  Warnings:

  - You are about to drop the column `score` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `uid` on the `Game` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Game` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `score1` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score2` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GameOnUsers" DROP CONSTRAINT "GameOnUsers_gameId_fkey";

-- DropIndex
DROP INDEX "Game_uid_key";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "score",
DROP COLUMN "uid",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "score1" INTEGER NOT NULL,
ADD COLUMN     "score2" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Game_id_key" ON "Game"("id");

-- AddForeignKey
ALTER TABLE "GameOnUsers" ADD CONSTRAINT "GameOnUsers_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
