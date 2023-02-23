/**
 * file: src/guards/role.guard.ts
 * date: 02/23/2023
 * description: file responsible for the 'role' guard
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "src/decorators/roles.decorator";
import { Role } from "src/enums/role.enum";

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    private readonly reflactor: Reflector,
  ) { }


  async canActivate(context: ExecutionContext) {

    const requiredRoles = this.reflactor.getAllAndOverride<Role[]>(ROLES_KEY, [context.getHandler(), context.getClass()]);

    if (!requiredRoles) {
      return true;
    }

    const user = context.switchToHttp().getRequest();

    console.log({ requiredRoles, user })

    return true;
  }
}