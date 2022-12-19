/**
 * file: src/application/entities/notification.ts
 * date: 12/19/2022
 * description: file responsible for test the 'Notification' entity
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: '123456',
      content: new Content('You received a new friendship notification'),
      category: 'social',
    });

    expect(notification).toBeTruthy();
  })
});
