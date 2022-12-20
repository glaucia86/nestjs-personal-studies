/**
 * file: src/infra/http.module.ts
 * date: 12/16/2022
 * description: file responsible for the http module
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Module } from '@nestjs/common';
import { NotificationsController } from './http/controllers/notifications.controller';

@Module({
  imports: [],
  controllers: [NotificationsController],
})
export class HttpModule { }
