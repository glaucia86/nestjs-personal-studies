/**
 * file: src/auth/auth.module.ts
 * date: 02/13/2023
 * description: file responsible for the 'auth' module
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller';
import { FileModule } from './../file/file.module';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/dto/entity/user.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    JwtModule.register({
      secret: String(process.env.JWT_SECRET)
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