/**
 * file: src/user/dto/update-patch-user.dto.ts
 * date: 01/27/2023
 * description: file responsible for the 'update 'patch' user' dto
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { CreateUserDTO } from "./create.user.dto";
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePatchUserDTO extends PartialType(CreateUserDTO) { }