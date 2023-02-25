/**
 * file: src/decorators/roles.decorator.ts
 * date: 02/23/2023
 * description: file responsible for the 'Role' decorator
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { SetMetadata } from "@nestjs/common";
import { Role } from "../enums/role.enum";

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata('ROLES_KEY', roles);

