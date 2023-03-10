/**
 * file: src/user/user.service.ts
 * date: 02/04/2023
 * description: file responsible for the 'user' service
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import {
  CreateUserDTO,
  UpdatePatchUserDTO,
  UpdatePutUserDTO
} from './dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  async createUser(data: CreateUserDTO) {

    const salt = await bcrypt.genSalt();

    data.password = await bcrypt.hash(data.password, salt);

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

    await this.validateUserExists(id);

    return this.prisma.user.findUnique({
      where: {
        id,
      }
    });
  }

  async updateUser(id: number, { email, name, password, birthday, role }: UpdatePutUserDTO) {

    await this.validateUserExists(id);

    const salt = await bcrypt.genSalt();

    password = await bcrypt.hash(password, salt);

    return this.prisma.user.update({
      data: {
        email,
        name,
        password,
        birthday: birthday ? new Date(birthday) : null,
        role,
      },
      where: {
        id,
      },
    });
  }

  async updateUserPartial(id: number, { email, name, password, birthday, role }: UpdatePatchUserDTO) {

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
      const salt = await bcrypt.genSalt();
      data.password = await bcrypt.hash(password, salt);
    }

    if (role) {
      data.role = role;
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
    // if returns 0, it means that the user doesn't exist
    if (!(await this.prisma.user.count({
      where: {
        id,
      }
    }))) {
      throw new NotFoundException(`This user ${id} doesn't exist.`);
    }
  }

}