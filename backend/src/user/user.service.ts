
import {
	Injectable,
	ForbiddenException,
	BadRequestException,
	Inject,
	forwardRef,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { plainToClass } from 'class-transformer';

/* PRISMA */
import { PrismaService } from '../prisma/prisma.service';
import { UserDto } from './dto';


Injectable()
export class UserService {
	constructor(
		private readonly prisma: PrismaService

	) {}
async updateAvatar(id: number, newAvatar: string) {
		const updateUser = await this.prisma.user.update({
			where: {
				id: id,
			},
			data: {
				avatar: newAvatar,
			},
		});
		return updateUser;
	}
async updateEmail(id: number, newEmail: string) {
		const updateUser = await this.prisma.user.update({
			where: {
				id: id,
			},
			data: {
				email: newEmail,
			},
		});
		return updateUser;
	}

	async createUser(
		email: string,
		username: string,
		hash: string,
		avatar: string,
		id = 0,
	): Promise<User> {
		const user = await this.prisma.user.create({
			data: {
				email,
				username,
				hash,
				avatar,
				idtoken: id,
			},
		});
		return user;
	}

	async updateUsername(id: number, newUsername: string) {
		const updateUser = await this.prisma.user.update({
			where: {
				id: id,
			},
			data: {
				username: newUsername,
			},
		});
		return updateUser;
	}

		async getAllUsers() {
			const users = await this.prisma.user.findMany({
				orderBy: { id: 'asc' },
			});
			const userListDtos: UserDto[] = [];
			for (const user_ of users) {
				const user = await this.prisma.user.findUnique({
					where: {
						id: user_.id,
					},
					rejectOnNotFound: true,
				});
				const dtoUser = plainToClass(UserDto, user);
				userListDtos.push(dtoUser);
			}
			return userListDtos;
		}
	}


	