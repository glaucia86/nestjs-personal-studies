/**
 * file: src/decorators/roles.decorator.ts
 * date: 02/23/2023
 * description: file responsible for the 'Role' decorator
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { SetMetadata } from "@nestjs/common";
import { Role } from "src/enums/role.enum";

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);

