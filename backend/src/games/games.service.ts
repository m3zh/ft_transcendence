import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { CreateGameDto } from "./dto/create-game.dto";

@Injectable()
export class GamesService {
    constructor(private prisma: PrismaService) {}

    create(createGameDto: CreateGameDto) {
        return this.prisma.game.create({data: createGameDto});
    }

    findAll() {
        return this.prisma.game.findMany();
    }

    async findOne(id: string) {
        const content = await this.prisma.game.findUnique({where: {id : parseInt(id)}})
        if (!content) {
            //throw new HttpException('DATA NOT FOUND', HttpStatus.NOT_FOUND)
        }
        return content
    }
/*
    update(id: string, updateGamesDto: UpdateGamesDto) {
        return this.prisma.game.update(
            {
                where: {id: parseInt(id)},
                data: updateGamesDto
            }
        )
    }
*/
    remove(id: string) {
        return this.prisma.game.delete({where: {id: parseInt(id)}})
    }
}
