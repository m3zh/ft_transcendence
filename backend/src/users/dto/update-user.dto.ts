import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty} from '@nestjs/swagger'
export class UpdateUserDto extends PartialType(CreateUserDto) {

    @ApiProperty()
    username: string;
    @ApiProperty()
    avatar: string;
    // @ApiProperty()
    // friends: string[];
    // @ApiProperty()
    // blacklist: string[];
    // @ApiProperty()
    // groups: string[]
}
