/**
 * file: src/app.controller.ts
 * date: 01/27/2023
 * description: file responsible for the 'app' controller
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  setHello(): string {
    return 'POST: Hello, friends!';
  }
}
