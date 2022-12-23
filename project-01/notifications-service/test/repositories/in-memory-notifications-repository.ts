/**
 * file: test/repositories/in-memory-notifications-repository.ts
 * date: 12/20/2022
 * description: file responsible for the implementation of the InMemoryNotificationsRepository class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Notification } from '@application/entities/notification';

export class InMemoryNotificationsRepository implements NotificationsRepository {

  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async findById(notificationId: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }

  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
