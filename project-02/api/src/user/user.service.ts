/**
 * file: src/user/user.service.ts
 * date: 02/04/2023
 * description: file responsible for the 'user' service
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import {
  CreateUserDTO,
  UpdatePatchUserDTO,
  UpdatePutUserDTO
} from './dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserEntity } from './dto/entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) { }

  async createUser(data: CreateUserDTO) {

    if (await this.userRepository.exist({
      where: {
        email: data.email
      }
    })) {
      throw new BadRequestException('Email already exists');
    }

    const salt = await bcrypt.genSalt();

    data.password = await bcrypt.hash(data.password, salt);

    const user = this.userRepository.create(data);

    return this.userRepository.save(user);
  }

  async listUsers() {
    return this.userRepository.find({
      order: {
        name: 'ASC'
      }
    });
  }

  async listUserById(id: number) {

    await this.validateUserExists(id);

    return this.userRepository.findOneBy({
      id
    });
  }

  async updateUser(id: number, { email, name, password, birthday, role }: UpdatePutUserDTO) {

    await this.validateUserExists(id);

    const salt = await bcrypt.genSalt();

    password = await bcrypt.hash(password, salt);

    await this.userRepository.update(id, {
      email,
      name,
      password,
      birthday: birthday ? new Date(birthday) : null,
      role
    });

    return this.listUserById(id);
  }

  async updateUserPartial(id: number, { email, name, password, birthday, role }: UpdatePatchUserDTO) {

    await this.validateUserExists(id);

    const data: any = {};

    if (birthday) {
      data.birthday = new Date(birthday);
    }

    if (email) {
      data.email = email;
    }

    if (name) {
      data.name = name;
    }

    if (password) {
      const salt = await bcrypt.genSalt();
      data.password = await bcrypt.hash(password, salt);
    }

    if (role) {
      data.role = role;
    }

    await this.userRepository.update(id, data);

    return this.listUserById(id);
  }

  async deleteUserById(id: number) {

    await this.validateUserExists(id);

    return this.userRepository.delete(id);
  }

  async validateUserExists(id: number) {
    // if returns 0, it means that the user doesn't exist
    if (!(await this.userRepository.exist({
      where: {
        id
      }
    }))) {
      throw new NotFoundException(`This user ${id} doesn't exist.`);
    }
  }

}

