/**
 * file: src/app.controller.ts
 * date: 12/15/2022
 * description: file responsible for the 'AppController' class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { PrismaService } from './prisma.service';
import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) { }

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Welcome to the platform! We are glad to have you here! :)',
        category: 'new_user',
        recipientId: randomUUID(),
      },
    });
  }
}
