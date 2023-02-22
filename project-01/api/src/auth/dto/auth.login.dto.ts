/**
 * file: src/auth/dto/auth-login.dto.ts
 * date: 02/20/2023
 * description: file responsible for the 'auth-login' dto
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { IsEmail, IsString, MinLength } from "class-validator";

export class AuthLoginDTO {

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}