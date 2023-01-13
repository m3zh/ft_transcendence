import { ApiProperty } from '@nestjs/swagger'
import { IsInt } from "class-validator";

export class CreateGameDto {
    @IsInt()
    @ApiProperty()
    id: number

    @IsInt()
    @ApiProperty()
    score1: number

    @IsInt()
    @ApiProperty()
    score2: number

    @IsInt()
    @ApiProperty()
    player1Id: number

    @IsInt()
    @ApiProperty()
    player2Id: number

    @IsInt()
    @ApiProperty()
    winnerId: number
}
