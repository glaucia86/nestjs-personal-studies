/**
 * file: src/application/repositories/notification-repositories.ts
 * date: 12/20/2022
 * description: file responsible for the 'Notification' repository class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Notification } from "../entities/notification";

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
}
