/**
 * file: src/application/entities/use-cases/send-notification.spec.ts
 * date: 12/19/2022
 * description: file responsible for the 'SendNotification' use case tests
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Notification } from "../notification";
import { SendNotification } from "./send-notification";

const notifications: Notification[] = [];

const notificationsRepositoryMock = {
  async create(notification: Notification) {
    notifications.push(notification);
  }
}

describe('Send Notification', () => {
  it('should be able to send a new notification', async () => {
    const sendNotification = new SendNotification(notificationsRepositoryMock);

    await sendNotification.execute({
      recipientId: '123456',
      content: 'You received a new friendship notification',
      category: 'social',
    });

    expect(notifications).toHaveLength(1);
  });
});
