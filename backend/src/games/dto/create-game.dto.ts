import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString } from "class-validator";

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

    @IsString()
    @ApiProperty()
    player1: string

    @IsString()
    @ApiProperty()
    player2: string

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
