/**
 * file: src/auth/auth.module.ts
 * date: 02/13/2023
 * description: file responsible for the 'auth' module
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    secret: `^6wRLcr(u8,:b+Br[%.jyWj]#}?QSk~X`
  })]
})
export class AuthModule { }