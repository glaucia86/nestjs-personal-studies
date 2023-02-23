/**
 * file: src/user/dto/create-user.dto.ts
 * date: 01/27/2023
 * description: file responsible for the 'create user' dto
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { IsString, IsEmail, IsOptional, IsDateString, MinLength, IsEnum } from "class-validator";
import { Role } from './../../enums/role.enum';

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

  @IsOptional()
  @IsEnum(Role)
  role: number;

}