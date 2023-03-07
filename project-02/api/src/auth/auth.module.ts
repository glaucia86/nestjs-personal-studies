/**
 * file: src/auth/auth.module.ts
 * date: 02/13/2023
 * description: file responsible for the 'auth' module
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { FileModule } from './../file/file.module';
import { AuthService } from './auth.service';
import { UserEntity } from 'src/user/dto/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET
    }),
    forwardRef(() => UserModule),
    FileModule,
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule { }