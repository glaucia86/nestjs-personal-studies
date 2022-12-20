/**
 * file: src/application/entities/use-cases/send-notification.ts
 * date: 12/19/2022
 * description: file responsible for the 'SendNotification' use case
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Injectable } from '@nestjs/common';
import { Notification } from './../notification';
import { Content } from './../content';
import { NotificationsRepository } from '../../repositories/notifications-repository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {

  constructor(private notificationsRepository: NotificationsRepository) { }

  async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
