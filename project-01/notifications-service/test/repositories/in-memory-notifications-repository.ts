/**
 * file: test/repositories/in-memory-notifications-repository.ts
 * date: 12/20/2022
 * description: file responsible for the implementation of the InMemoryNotificationsRepository class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { NotificationRepository } from '../../src/application/repositories/notifications-repositories';
import { Notification } from '../../src/application/entities/notification';

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
