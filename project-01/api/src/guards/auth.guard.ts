/**
 * file: src/guards/auth.guard.ts
 * date: 02/22/2023
 * description: file responsible for the 'auth' guard
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { UserService } from '../user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) { }


  async canActivate(context: ExecutionContext) {

    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    try {
      // using 'checkToken here to collect the user data who is trying to access the route
      const data = this.authService.checkToken((authorization ?? '').split(' ')[1]);
      request.tokenPayload = data;
      request.user = await this.userService.listUserById(data.id)

      return true
    } catch (error) {
      return false;
    }
  }
}