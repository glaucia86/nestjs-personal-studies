/**
 * file: src/user/user.controller.ts
 * date: 26/01/2023
 * description: file responsible for the 'user' controller
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Body, Controller, Post } from '@nestjs/common';


@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body) {
    return { body };
  }
}