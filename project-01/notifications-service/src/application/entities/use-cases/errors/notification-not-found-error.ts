/**
 * file: src/application/entities/use-cases/errors/notification-not-found.ts
 * date: 12/23/2022
 * description: file responsible for the 'NotificationNotFound' error
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export class NotificationNotFoundError extends Error {
  constructor() {
    super('Notification not found.');
  }
}
