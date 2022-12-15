/**
 * file: src/create-notification-body.ts
 * date: 12/15/2022
 * description: file responsible for the creation of the notification body
 * using the Prisma ORM
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export class CreateNotificationBody {
  recipientId: string;
  content: string;
  category: string;
}
