/**
 * file: src/auth/auth.controller.ts
 * date: 02/20/2023
 * description: file responsible for the 'auth' controller
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Body, Controller, Post } from '@nestjs/common';
// import { AuthLoginDTO } from './dto/auth-login.dto';
// import { AuthForgotEmailDTO } from './dto/auth-forgot-email.dto';
// import { AuthRegisterDTO } from './dto/auth-register.dto';
// import { AuthResetPasswordDTO } from './dto/auth-reset-password.dto';
import {
  AuthLoginDTO,
  AuthForgotEmailDTO,
  AuthRegisterDTO,
  AuthResetPasswordDTO
} from './dto/index'

@Controller('auth')
export class AuthController {

  @Post('login')
  async login(@Body() body: AuthLoginDTO) { }

  @Post('register')
  async register(@Body() body: AuthRegisterDTO) { }

  @Post('forgot-email')
  async forgotEmail(@Body() body: AuthForgotEmailDTO) { }

  @Post('reset-password')
  async resetPassword(@Body() body: AuthResetPasswordDTO) { }
}