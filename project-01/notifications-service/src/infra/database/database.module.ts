/**
 * file: src/infra/database/database.module.ts
 * date: 12/20/2022
 * description: file responsible for the database module
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Module } from "@nestjs/common";
import { NotificationsRepository } from "@application/repositories/notifications-repository";
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications.repository';

@Module({
  providers: [PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository
    }
  ],
  exports: [NotificationsRepository],
})

export class DatabaseModule { };
