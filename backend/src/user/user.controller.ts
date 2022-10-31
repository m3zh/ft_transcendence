import {
	Body,
	Controller,
	ForbiddenException,
	Get,
	Logger,
	Post,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { isNumber } from 'class-validator';
@ApiTags('Users')
@Controller('users')
@Post('/update_username')
	async updateUsername(
		@Body() newUsername: UpdateUsernameDto,
		@GetCurrentUserId() id: number,
	) {
		const { username } = newUsername;
		this.logger.log(
			'updateUsername ID ' + id + ' -> username: ' + username,
		);
		try {
			const result = await this.userService.updateUsername(id, username);
			return result;
		} catch {
			throw new ForbiddenException('Username already exists');
		}
	}

	@Post('/update_avatar')
	async updateAvatar(
		@Body('avatar') newAvatar: string,
		@GetCurrentUserId() id: number,
	) {
		const result = await this.userService.updateAvatar(id, newAvatar);
		return result;
	}

	@Post('/update_email')
	async updateEmail(
		@Body() newEmail: UpdateEmailDto,
		@GetCurrentUserId() id: number,
	) {
		const { email } = newEmail;
		try {
			const result = await this.userService.updateEmail(id, email);
			return result;
		} catch {
			throw new ForbiddenException('Error : email is not updated');
		}
	}
