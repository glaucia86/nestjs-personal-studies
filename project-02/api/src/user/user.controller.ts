/**
 * file: src/user/user.controller.ts
 * date: 01/27/2023
 * description: file responsible for the 'user' controller
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Patch,
  Delete,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import {
  CreateUserDTO,
  UpdatePutUserDTO,
  UpdatePatchUserDTO
} from './dto/index';
import { UserService } from './user.service';
import { ParamId } from '../decorators/param.id.decorator';
import { Roles } from '../decorators/roles.decorator';
import { Role } from '../enums/role.enum';
import { RoleGuard } from '../guards/role.guard';
import { AuthGuard } from '../guards/auth.guard';
import { LogInterceptor } from './../interceptors/log.interceptor';

@Roles(Role.Admin)
@UseGuards(AuthGuard, RoleGuard)
@UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.userService.createUser(data);
  }

  @Get()
  async list() {
    return this.userService.listUsers();
  }

  @Get(':id')
  async listById(@ParamId() id: number) {
    console.log({ id });
    return this.userService.listUserById(id);
  }

  @Put(':id')
  async update(@Body() data: UpdatePutUserDTO, @ParamId() id: number) {
    return this.userService.updateUser(id, data);
  }

  @Patch(':id')
  async updatePartial(@Body() data: UpdatePatchUserDTO, @ParamId() id: number) {
    return this.userService.updateUserPartial(id, data);
  }

  @Delete(':id')
  async delete(@ParamId() id: number) {
    return {
      success: this.userService.deleteUserById(id),
    };
  }
}