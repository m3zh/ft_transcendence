/*
  Warnings:

  - Made the column `intra_id` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "intra_id" SET NOT NULL;
