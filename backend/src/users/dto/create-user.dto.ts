import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
    @ApiProperty()
    username: string;
    @ApiProperty()
    hash: string;
    @ApiProperty()
    avatar: string;
    @ApiProperty()
    intratoken: string;
    @ApiProperty()
    dblauth: boolean = false;
    @ApiProperty()
    mail: string
    @ApiProperty()
    friends: string[];
    @ApiProperty()
    blacklist: string[];
    @ApiProperty()
    groups: string[]
}

