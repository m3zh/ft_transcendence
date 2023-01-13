-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "max_score" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "status" TEXT DEFAULT 'online',
ADD COLUMN     "title" TEXT DEFAULT 'A newbie pong player';
