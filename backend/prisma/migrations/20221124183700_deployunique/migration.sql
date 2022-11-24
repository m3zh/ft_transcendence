/*
  Warnings:

  - A unique constraint covering the columns `[intra_id]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Users_intra_id_key" ON "Users"("intra_id");
