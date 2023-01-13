-- CreateTable
CREATE TABLE "Friends" (
    "id" SERIAL NOT NULL,
    "requester" TEXT NOT NULL,
    "status" TEXT,
    "friends" TEXT,

    CONSTRAINT "Friends_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Friends_requester_key" ON "Friends"("requester");
