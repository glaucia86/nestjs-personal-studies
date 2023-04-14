import { jwtPayloadMock } from './jwt-payload.mock';
/**
 * file: src/testing/auth-service.mock.ts
 * date: 04/14/2023
 * description: file responsible for the 'auth' service mock
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { AuthService } from './../auth/auth.service';
import { accessToken } from './access-token.mock';

export const authServiceMock = {

  provide: AuthService,
  useValue: {
    createToken: jest.fn().mockReturnValue({ accessToken }),
    isValidToken: jest.fn().mockReturnValue(true),
    checkToken: jest.fn().mockReturnValue(jwtPayloadMock),
    authLogin: jest.fn().mockResolvedValue({ accessToken }),
    authForgotEmail: jest.fn().mockResolvedValue(true),
    authResetPassword: jest.fn().mockReturnValue({ accessToken }),
    authRegister: jest.fn().mockReturnValue({ accessToken }),
  }
}
