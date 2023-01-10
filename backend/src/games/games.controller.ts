import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { GamesService } from './games.service';
import { Game } from './entities/game.entity';
import { CreateGameDto } from "./dto/create-game.dto";
import {UpdateGameDto} from "./dto/update-game.dto";

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

    @Get('find/:id')
    async findOne(@Param('id') id: string): Promise<Game> {
        return await this.gamesService.findOne(id);
    }

    @Put('update/:id')
    async update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto): Promise<void> {
        await this.gamesService.update(id, updateGameDto);
    }

    @Delete('delete/:id')
    async remove(@Param('id') id: string): Promise<void> {
        const find = (await this.findOne(id));
        if (find)
            await this.gamesService.remove(id);
    }

    @Get('active')
    async active(): Promise<Game[]> {
        return await this.gamesService.active();
    }

    @Get('queue')
    async queue(): Promise<Game[]> {
        return await this.gamesService.queue();
    }
}
