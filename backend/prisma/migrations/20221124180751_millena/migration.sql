/*
  Warnings:

  - You are about to drop the column `intratoken` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "intratoken",
ADD COLUMN     "intra_id" INTEGER;
