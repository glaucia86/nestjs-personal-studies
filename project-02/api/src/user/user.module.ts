/**
 * file: src/user/user.module.ts
 * date: 01/26/2023
 * description: file responsible for the user module
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { forwardRef, MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UserIdCheckMiddleware } from 'src/middlewares/user.id.check.middleware';
import { AuthModule } from './../auth/auth.module';
import { UserEntity } from './dto/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})

export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserIdCheckMiddleware)
      .forRoutes({
        path: 'users/:id',
        method: RequestMethod.ALL
      });
  }
}