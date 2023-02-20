/**
 * file: src/user/dto/create-user.dto.ts
 * date: 01/27/2023
 * description: file responsible for the 'create user' dto
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { IsString, IsEmail, IsOptional, IsDateString, MinLength } from "class-validator";

export class CreateUserDTO {

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsDateString()
  birthday: string;
}