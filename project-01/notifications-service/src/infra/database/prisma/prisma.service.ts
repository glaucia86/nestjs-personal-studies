/**
 * file: src/infra/database/prisma.service.ts
 * date: 12/20/2022
 * description: file responsible for the connection with the database
 * using the Prisma ORM
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
