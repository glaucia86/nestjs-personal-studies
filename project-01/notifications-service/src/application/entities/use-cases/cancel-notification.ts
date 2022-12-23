/**
 * file: src/application/entities/use-cases/cancel-notification.ts
 * date: 12/23/2022
 * description: file responsible for the 'CancelNotification' use case
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../repositories/notifications-repository';
import { NotificationNotFoundError } from './errors/notification-not-found-error';

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {

  constructor(private notificationsRepository: NotificationsRepository) { }

  async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFoundError;
    }

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
