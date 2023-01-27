/**
 * file: src/user/user.controller.ts
 * date: 26/01/2023
 * description: file responsible for the 'user' controller
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Body, Controller, Get, Param, Post, Put, Patch, Delete } from '@nestjs/common';


@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body) {
    return { body };
  }

  @Get()
  async read() {
    return { users: [] }
  }

  @Get(':id')
  async readById(@Param() params) {
    return { user: {}, params }
  }

  @Put(':id')
  async update(@Body() body, @Param() params) {
    return {
      method: 'put',
      body,
      params
    }
  }

  @Patch(':id')
  async updatePartial(@Body() body, @Param() params) {
    return {
      method: 'patch',
      body,
      params
    }
  }

  @Delete(':id')
  async delete(@Param() params) {
    return {
      params
    }
  }
}