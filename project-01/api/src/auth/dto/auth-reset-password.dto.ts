/**
 * file: src/auth/dto/auth-reset-password.dto.ts
 * date: 02/20/2023
 * description: file responsible for the 'auth-reset-password' dto
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { IsJWT, IsString, MinLength } from "class-validator";

export class AuthResetPasswordDTO {

  @IsString()
  @MinLength(6)
  password: string;

  @IsJWT()
  token: string;
}