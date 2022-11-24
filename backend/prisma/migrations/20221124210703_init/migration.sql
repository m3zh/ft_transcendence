-- CreateTable
CREATE TABLE "Users" (
    "uid" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "hash" TEXT,
    "avatar" TEXT,
    "intra_id" INTEGER,
    "dblauth" BOOLEAN NOT NULL DEFAULT false,
    "mail" TEXT,
    "friends" TEXT[],
    "blacklist" TEXT[],
    "groups" TEXT[],

    CONSTRAINT "Users_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Profils" (
    "uid" SERIAL NOT NULL,
    "image_url" TEXT NOT NULL,
    "hash" TEXT,
    "type" TEXT,
    "information" TEXT NOT NULL,

    CONSTRAINT "Profils_pkey" PRIMARY KEY ("information")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_intra_id_key" ON "Users"("intra_id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_mail_key" ON "Users"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "Profils_uid_key" ON "Profils"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "Profils_image_url_key" ON "Profils"("image_url");
