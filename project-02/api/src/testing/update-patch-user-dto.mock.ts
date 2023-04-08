/**
 * file: src/testing/update-patch-user-dto.mock.ts
 * date: 03/14/2023
 * description: file responsible for 
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Role } from '../enums/role.enum';
import { UpdatePatchUserDTO } from '../user/dto/update-patch-user.dto';

export const updatePatchUserMockDTO: UpdatePatchUserDTO = {
  role: Role.Admin,
}
