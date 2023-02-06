/**
 * file: src/user/user.service.ts
 * date: 02/04/2023
 * description: file responsible for the 'user' service
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';

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
}