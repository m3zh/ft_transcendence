import { PartialType } from '@nestjs/swagger';
import { ApiProperty} from '@nestjs/swagger'
import {CreateGameDto} from "./create-game.dto";

export class UpdateGameDto extends PartialType(CreateGameDto) {
    @ApiProperty()
    score1: number;
    @ApiProperty()
    score2: number;
    @ApiProperty()
    isActive: boolean;
    @ApiProperty()
    inQueue: boolean;
    @ApiProperty()
    player2: string;
    @ApiProperty()
    player2Id: number;
    @ApiProperty()
    winnerId: number;
}
