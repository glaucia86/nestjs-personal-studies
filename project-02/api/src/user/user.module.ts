/**
 * file: src/user/user.module.ts
 * date: 01/26/2023
 * description: file responsible for the user module
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { PrismaModule } from './../prisma/prisma.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module } from "@nestjs/common";

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
  exports: []
})
export class UserModule {

}