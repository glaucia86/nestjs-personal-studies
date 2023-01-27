/**
 * file: src/user/user.controller.ts
 * date: 01/27/2023
 * description: file responsible for the 'user' controller
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Body, Controller, Get, Param, Post, Put, Patch, Delete } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';


@Controller('users')
export class UserController {
  @Post()
  async create(@Body() { name, email, password }: CreateUserDTO) {
    return { name, email, password };
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
  async update(@Body() { name, email, password }: UpdatePutUserDTO, @Param() params) {
    return {
      method: 'put',
      name,
      email,
      password,
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