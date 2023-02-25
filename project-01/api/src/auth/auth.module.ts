import { AuthService } from './auth.service';
/**
 * file: src/auth/auth.module.ts
 * date: 02/13/2023
 * description: file responsible for the 'auth' module
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from './../prisma/prisma.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: `^6wRLcr(u8,:b+Br[%.jyWj]#}?QSk~X`
    }),
    forwardRef(() => UserModule),
    PrismaModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule { }