/**
 * file: src/auth/auth.service.ts
 * date: 02/13/2023
 * description: file responsible for the 'auth' service
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Injectable } from '@nestjs/common';
import { UnauthorizedException, BadRequestException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import { PrismaService } from './../prisma/prisma.service';
import { AuthRegisterDTO } from './dto';

@Injectable()
export class AuthService {

  private issuer = 'login';
  private audience = 'users';

  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly userService: UserService
  ) { }

  async createToken(user: User) {
    return {
      accessToken: this.jwtService.sign({
        id: user.id,
        name: user.name,
        email: user.email,
      }, {
        expiresIn: '7 days',
        subject: String(user.id),
        audience: this.audience,
        issuer: this.issuer,
      }),
    }
  }

  async isValidToken(token: string) {
    try {
      this.checkToken(token);
      return true;
    } catch (error) {
      return false;
    }
  }

  async checkToken(token: string) {
    try {
      const data = this.jwtService.verify(token, {
        audience: this.audience,
        issuer: this.issuer,
      });

      return data;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async authLogin(email: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
        password
      }
    });

    if (!user) {
      throw new UnauthorizedException('E-mail or password is incorrect!');
    }

    return this.createToken(user);
  }

  async authForgotEmail(email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email
      }
    });

    if (!user) {
      throw new UnauthorizedException('E-mail is incorrect!');
    }

    // TODO: Send email to user 

    return true;
  }

  async authResetPassword(password: string, token: string) {

    //TODO: Validate token

    // simulate user id
    const id = 0;

    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });

    return this.createToken(user);
  }

  async authRegister(data: AuthRegisterDTO) {
    const user = await this.userService.createUser(data);

    return this.createToken(user);
  }

}
