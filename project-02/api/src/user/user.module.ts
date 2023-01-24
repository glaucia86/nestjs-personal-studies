import { UserController } from './user.controller';
/**
 * file: src/user/user.module.ts
 * date: 26/01/2023
 * description: file responsible for the user module
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
  exports: []
})
export class UserModule {

}