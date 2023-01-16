import { ApiProperty } from '@nestjs/swagger';

export class CreateFriendsDto {
  @ApiProperty()
  friends: string;
}
