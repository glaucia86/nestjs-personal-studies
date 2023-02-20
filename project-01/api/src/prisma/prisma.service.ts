import { INestApplication } from '@nestjs/common';
/**
 * file: src/prisma/prisma.service.ts
 * date: 02/04/2023
 * description: file responsible for the 'Prisma' service
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutDownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

}