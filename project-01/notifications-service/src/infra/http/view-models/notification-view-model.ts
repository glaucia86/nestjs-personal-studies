/**
 * file: src/infra/http/view-models/notification-view-model.ts
 * date: 12/22/2022
 * description: file responsible for the 'NotificationViewModel' class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Notification } from "@application/entities/notification";

export class NotificationViewModel {
  static toHttp(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
    }
  }
}
