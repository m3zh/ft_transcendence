import { ApiProperty } from '@nestjs/swagger'
import {IsInt, IsUrl} from "class-validator";

export class CreateFrDto {
    @IsInt()
    @ApiProperty()
    intra_id: number
}
