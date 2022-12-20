/**
 * file: src/application/entities/use-cases/send-notification.ts
 * date: 12/19/2022
 * description: file responsible for the 'SendNotification' use case
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Notification } from './../notification';
import { Content } from './../content';
import { NotificationRepository } from 'src/application/repositories/notifications-repositories';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {

  constructor(private notificationRepository: NotificationRepository) { }

  async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationRepository.create(notification);

    return {
      notification,
    };
  }
}
