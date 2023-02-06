/**
 * file: src/user/dto/create-user.dto.ts
 * date: 01/27/2023
 * description: file responsible for the 'create user' dto
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { IsString, IsEmail, IsStrongPassword, IsOptional, IsDateString } from "class-validator";

export class CreateUserDTO {

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 6,
    minNumbers: 0,
    minSymbols: 0,
    minLowercase: 0,
    minUppercase: 0,
  })
  password: string;

  @IsOptional()
  @IsDateString()
  birthday: string;
}