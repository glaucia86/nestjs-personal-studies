/**
 * file: src/auth/dto/auth-forgot-password.dto.ts
 * date: 02/20/2023
 * description: file responsible for the 'auth-recover-password' dto
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { IsEmail } from "class-validator";

export class AuthForgotEmailDTO {

  @IsEmail()
  email: string;
}