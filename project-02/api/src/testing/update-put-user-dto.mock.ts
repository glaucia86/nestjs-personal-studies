/**
 * file: src/testing/update-put-user-dto.mock.ts
 * date: 03/14/2023
 * description: file responsible for 
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Role } from '../enums/role.enum';
import { UpdatePutUserDTO } from './../user/dto/update-put-user.dto';

export const updatePutUserMockDTO: UpdatePutUserDTO = {
  name: 'Glaucia Lemos',
  email: 'glaucia.lemos@email.com',
  birthday: '2000-10-24',
  password: '123456',
  role: Role.Admin,
}
