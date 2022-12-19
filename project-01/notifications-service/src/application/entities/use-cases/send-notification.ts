/**
 * file: src/application/entities/use-cases/send-notification.ts
 * date: 12/19/2022
 * description: file responsible for the 'SendNotification' use case
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Notification } from './../notification';
import { Content } from './../content';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    return {
      notification,
    };
  }
}
