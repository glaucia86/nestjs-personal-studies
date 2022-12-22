/**
 * file: src/infra/database/prisma/mappers/prisma-notification-mapper.ts
 * date: 12/22/2022
 * description: file responsible for mapping the 'Notification' entity to the 'Notification' model
 * using the Prisma ORM
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Notification } from "@application/entities/notification"

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    }
  }
}
