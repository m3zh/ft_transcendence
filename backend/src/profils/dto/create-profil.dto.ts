import { ApiProperty } from '@nestjs/swagger'
import {IsAscii, IsInt, IsUrl} from "class-validator";




export class CreateProfilDto {
    @IsInt()
    @ApiProperty()
    uid: number
    @IsUrl()
    @ApiProperty()
    image_url: string
    @IsAscii()
    @ApiProperty()
    hash: string
    @IsAscii()
    @ApiProperty()
    type: string
}
