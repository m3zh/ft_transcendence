import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { GamesService } from './games.service';
import { Game } from './entities/game.entity';
import { CreateGameDto } from "./dto/create-game.dto";

@Controller('games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) {}

    @Post()
    async create(@Body() createGameDto: CreateGameDto): Promise<Game> {
        return await this.gamesService.create(createGameDto);
    }

    @Get()
    async findAll(): Promise<Game[]> {
        return await this.gamesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Game> {
        return await this.gamesService.findOne(id);
    }
    /*
    @Put(':id')
    async update(@Param('id') id: string, @Body() games: Game): Promise<void> {
        await this.gamesService.update(id, games);
    }

     */
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        const find = (await this.findOne(id));
        if (find)
            await this.gamesService.remove(id);
    }
}
