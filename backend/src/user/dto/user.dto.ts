
import { IsString, IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class UpdateUsernameDto {
	@IsString()
	@IsNotEmpty()
	@MaxLength(40)
	username: string;
}

export class UpdateEmailDto {
	@IsString()
	@IsEmail()
	@MaxLength(50)
	@IsNotEmpty()
	email: string;
}


import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber, MaxLength } from 'class-validator';

/*
 *	DTO = Data Transfer Object
 *	watch for changes in the user model depending on Shu Yen's work :)
 */

export class UserDto {
	//Data transfer object
	@IsNumber()
	@IsNotEmpty()
	id: number;

	@IsString()
	@IsNotEmpty()
	username: string;

	@IsString()
	@IsNotEmpty()
	email: string;

	@IsString()
	@IsNotEmpty()
	@MaxLength(65_000)
	avatar: string;

	@Exclude()
	hash: string;

	@Exclude()
	hashedRtoken: string;
}
