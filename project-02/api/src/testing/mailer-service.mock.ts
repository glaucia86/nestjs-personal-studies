/**
 * file: src/testing/mailer-service.mock.ts
 * date: 03/20/2023
 * description: file responsible for the 'mailer' service mock
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { MailerService } from '@nestjs-modules/mailer';


export const mailerServiceMock = {

  provide: MailerService,
  useValue: {
    sendMail: jest.fn(),
  }
}
