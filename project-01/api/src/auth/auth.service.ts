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
import * as bcrypt from 'bcrypt';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AuthService {

  private issuer = 'login';
  private audience = 'users';

  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly mailer: MailerService,
  ) { }

  createToken(user: User) {
    return {
      accessToken: this.jwtService.sign({
        id: user.id,
        name: user.name,
        email: user.email,
      }, {
        expiresIn: '7 days',
        subject: String(user.id),
        issuer: this.issuer,
        audience: this.audience,
      }),
    }
  }

  isValidToken(token: string) {
    try {
      this.checkToken(token);
      return true;
    } catch (error) {
      return false;
    }
  }

  checkToken(token: string) {
    try {
      const data = this.jwtService.verify(token, {
        issuer: this.issuer,
        audience: this.audience,
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
      }
    });

    if (!user) {
      throw new UnauthorizedException('E-mail or password is incorrect!');
    }

    if (!await bcrypt.compare(password, user.password)) {
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

    const token = this.jwtService.sign({
      id: user.id,
    }, {
      expiresIn: '30 minutes',
      subject: String(user.id),
      issuer: 'forget',
      audience: 'users',
    });

    await this.mailer.sendMail({
      subject: 'Reset password',
      to: 'glaucia.lemos@email.com',
      template: 'forget',
      context: {
        name: user.name,
        token,
      }
    });

    return true;
  }

  async authResetPassword(password: string, token: string) {

    try {
      const data = this.jwtService.verify(token, {
        issuer: 'forget',
        audience: 'users',
      });

      if (isNaN(Number(data.id))) {
        throw new BadRequestException('Invalid token');
      }

      const salt = await bcrypt.genSalt();
      password = await bcrypt.hash(password, salt);

      const user = await this.prisma.user.update({
        where: {
          id: Number(data.id),
        },
        data: {
          password,
        },
      });
      return this.createToken(user);

    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async authRegister(data: AuthRegisterDTO) {
    const user = await this.userService.createUser(data);

    return this.createToken(user);
  }

}
