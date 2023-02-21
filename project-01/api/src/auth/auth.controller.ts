/**
 * file: src/auth/auth.controller.ts
 * date: 02/20/2023
 * description: file responsible for the 'auth' controller
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Body, Controller, Post } from '@nestjs/common';
import {
  AuthLoginDTO,
  AuthForgotEmailDTO,
  AuthRegisterDTO,
  AuthResetPasswordDTO
} from './dto/index'
import { UserService } from './../user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) { }

  @Post('login')
  async login(@Body() { email, password }: AuthLoginDTO) {
    return this.authService.authLogin(email, password);
  }

  @Post('register')
  async register(@Body() body: AuthRegisterDTO) {
    return this.authService.authRegister(body);
  }

  @Post('forgot-email')
  async forgotEmail(@Body() { email }: AuthForgotEmailDTO) {
    return this.authService.authForgotEmail(email)
  }

  @Post('reset-password')
  async resetPassword(@Body() { password, token }: AuthResetPasswordDTO) {
    return this.authService.authResetPassword(password, token);
  }

  @Post('me')
  async me(@Body() body) {
    return this.authService.checkToken(body.token);
  }
}