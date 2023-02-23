/**
 * file: src/user/user.controller.ts
 * date: 01/27/2023
 * description: file responsible for the 'user' controller
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import {
  CreateUserDTO,
  UpdatePutUserDTO,
  UpdatePatchUserDTO
} from './dto/index';
import { UserService } from './user.service';
import { ParamId } from 'src/decorators/param.id.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';

@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Roles(Role.Admin)
  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.userService.createUser(data);
  }

  @Roles(Role.Admin)
  @Get()
  async list() {
    return this.userService.listUsers();
  }

  @Roles(Role.Admin)
  @Get(':id')
  async readById(@ParamId() id: number) {
    return this.userService.listUserById(id);
  }

  @Roles(Role.Admin)
  @Put(':id')
  async update(@Body() data: UpdatePutUserDTO, @ParamId() id: number) {
    return this.userService.updateUser(id, data);
  }

  @Roles(Role.Admin)
  @Patch(':id')
  async updatePartial(@Body() data: UpdatePatchUserDTO, @ParamId() id: number) {
    return this.userService.updateUserPartial(id, data);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  async delete(@ParamId() id: number) {
    return this.userService.deleteUserById(id);
  }
}