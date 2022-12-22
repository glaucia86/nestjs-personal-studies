/**
 * file: src/infra/database/prisma/repositories/prisma-notifications.repository.ts
 * date: 12/20/2022
 * description: file responsible for the 'PrismaNotificationsRepository' class
 * using the Prisma ORM
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaNotificationMapper } from './../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {

  constructor(private prismaService: PrismaService) { }

  async create(notification: Notification): Promise<void> {

    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw
    })
  }

}
