-- CreateTable
CREATE TABLE "Game" (
    "uid" SERIAL NOT NULL,
    "score" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "GameOnUsers" (
    "playerId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "GameOnUsers_pkey" PRIMARY KEY ("playerId","gameId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_uid_key" ON "Game"("uid");

-- AddForeignKey
ALTER TABLE "GameOnUsers" ADD CONSTRAINT "GameOnUsers_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Users"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameOnUsers" ADD CONSTRAINT "GameOnUsers_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
