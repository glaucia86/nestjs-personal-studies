/**
 * file: src/user/user.service.ts
 * date: 02/04/2023
 * description: file responsible for the 'user' service
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Injectable } from '@nestjs/common';
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

  async updateUser(id: number, data: UpdatePutUserDTO) {
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async updateUserPartial(id: number, data: UpdatePatchUserDTO) {
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async deleteUserById(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      }
    });
  }

}