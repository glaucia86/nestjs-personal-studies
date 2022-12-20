/**
 * file: src/infra/database/prisma/repositories/prisma-notifications.repository.ts
 * date: 12/20/2022
 * description: file responsible for the 'PrismaNotificationsRepository' class
 * using the Prisma ORM
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from '../../../../application/entities/notification';
import { NotificationsRepository } from '../../../../application/repositories/notifications-repository';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {

  constructor(private prismaService: PrismaService) { }

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      }
    })
  }

}
