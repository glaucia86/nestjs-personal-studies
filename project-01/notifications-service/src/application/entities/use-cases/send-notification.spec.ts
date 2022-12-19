/**
 * file: src/application/entities/use-cases/send-notification.spec.ts
 * date: 12/19/2022
 * description: file responsible for the 'SendNotification' use case tests
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { SendNotification } from "./send-notification";

describe('Send Notification', () => {
  it('should be able to send a new notification', async () => {
    const sendNotification = new SendNotification();

    const notification = await sendNotification.execute({
      recipientId: '123456',
      content: 'You received a new friendship notification',
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
