/**
 * file: src/auth/auth.service.ts
 * date: 02/13/2023
 * description: file responsible for the 'auth' service
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private readonly jwtService: JwtService) { }

  async createToken() {
    // return this.jwtService.sign();
  }

  async checkToken() {
    // return this.jwtService.verify();
  }
}
