/**
 * file: src/testing/user-repository.mock.ts
 * date: 03/14/2023
 * description: file responsible for the 'UserRepository' mock
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Role } from "../enums/role.enum";
import { UserEntity } from "../user/dto/entity/user.entity";

export const userEntityList: UserEntity[] = [{
  name: 'Glaucia Lemos',
  email: 'glaucia.lemos@email.com',
  birthday: new Date('1986-10-24'),
  id: 1,
  password: '$2b$10$Z8H.iZsfsXwbneFR/19R7uoT7gCbaOxlvxehJ1o/CmQWXdLgNuBP2',
  role: Role.Admin,
  createdat: new Date(),
  updatedat: new Date()

}, {
  name: 'Jurema Lemos',
  email: 'jurema.lemos@email.com',
  birthday: new Date('1952-07-27'),
  id: 2,
  password: '$2b$10$Z8H.iZsfsXwbneFR/19R7uoT7gCbaOxlvxehJ1o/CmQWXdLgNuBP2',
  role: Role.User,
  createdat: new Date(),
  updatedat: new Date()
}]