/**
 * file: src/testing/create-user-dto.mock.ts
 * date: 03/14/2023
 * description: file responsible for 
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Role } from "../enums/role.enum";
import { CreateUserDTO } from "../user/dto";

export const createUserMockDTO: CreateUserDTO = {
  name: 'Fulano Lemos',
  email: 'fulano.lemos@email.com',
  birthday: '1986-10-10',
  password: '123456',
  role: Role.User
}