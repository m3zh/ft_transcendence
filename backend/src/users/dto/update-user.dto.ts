import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty} from '@nestjs/swagger'
export class UpdateUserDto extends PartialType(CreateUserDto) {

    @ApiProperty()
    username: string;
    @ApiProperty()
    avatar: string;
    @ApiProperty()
    title: string;
    @ApiProperty()
    status: string;
    @ApiProperty()
    mail: string;
    @ApiProperty()
    max_score: number;
    // @ApiProperty()
    // friends: string[];
    // @ApiProperty()
    // blacklist: string[];
    // @ApiProperty()
    // groups: string[]
}
