/**
 * file: src/testing/jwt-service.mock.ts
 * date: 03/20/2023
 * description: file responsible for the 'jwtService' mock
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { JwtService } from '@nestjs/jwt';
import { accessToken } from './access-token.mock';
import { jwtPayloadMock } from './jwt-payload.mock';

export const jwtServiceMock = {

  provide: JwtService,
  useValue: {
    sign: jest.fn().mockReturnValue(accessToken),
    verify: jest.fn().mockReturnValue(jwtPayloadMock),
  }
}
