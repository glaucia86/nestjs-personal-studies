/**
 * file: src/user/user.service.ts
 * date: 02/04/2023
 * description: file responsible for the 'user' service
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';

@Injectable()
export class UserService {

  constructor(private readonly prisma: PrismaService) { }

  async createUser(data: CreateUserDTO) {
    return this.prisma.user.create({
      data,
    });
  }

  async listUsers() {
    return this.prisma.user.findMany({
      orderBy: [
        {
          name: 'asc',
        }
      ],
    });
  }

  async listUserById(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      }
    });
  }

  async updateUser(id: number, { email, name, password, birthday }: UpdatePutUserDTO) {

    await this.validateUserExists(id);

    return this.prisma.user.update({
      data: {
        email,
        name,
        password,
        birthday: birthday ? new Date(birthday) : null
      },
      where: {
        id,
      },
    });
  }

  async updateUserPartial(id: number, { email, name, password, birthday }: UpdatePatchUserDTO) {

    await this.validateUserExists(id);

    const data: any = {};

    if (birthday) {
      data.birthday = new Date(birthday);
    }

    if (email) {
      data.email = email;
    }

    if (name) {
      data.name = name;
    }

    if (password) {
      data.password = password;
    }

    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async deleteUserById(id: number) {

    await this.validateUserExists(id);

    return this.prisma.user.delete({
      where: {
        id,
      }
    });
  }

  async validateUserExists(id: number) {
    if (!(await this.listUserById(id))) {
      throw new NotFoundException(`This user ${id} doesn't exist.`);
    }
  }

}