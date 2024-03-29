/**
 * file: src/auth/auth.service.sepc.ts
 * date: 02/20/2023
 * description: file responsible for the 'auth' service unit tests
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { jwtServiceMock } from '../testing/jwt-service.mock';
import { userRepositoryMock } from './../testing/user-repository.mock';
import { userServiceMock } from "../testing/user-service.mock";
import { mailerServiceMock } from "../testing/mailer-service.mock";
import { accessToken } from './../testing/access-token.mock';
import { userEntityMockList } from './../testing/user-entity-list.mock';
import { jwtPayloadMock } from './../testing/jwt-payload.mock';
import { resetMockToken } from "../testing/reset-token.mock";
import { authRegisterMockDTO } from "../testing/auth-register-dto.mock";

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        userRepositoryMock,
        jwtServiceMock,
        userServiceMock,
        mailerServiceMock
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  test('Validate Auth Service definition', () => {
    expect(authService).toBeDefined();
  });

  describe('Token', () => {
    test('createToken Method', () => {
      const result = authService.createToken(userEntityMockList[0]);

      expect(result).toEqual({ accessToken });
    });

    test('checkToken Method', () => {
      const result = authService.checkToken(accessToken);

      expect(result).toEqual(jwtPayloadMock);
    });

    test('isValidToken Method', () => {
      const result = authService.isValidToken(accessToken);

      expect(result).toEqual(true);
    });
  });

  describe('Authentication', () => {

    test('authLogin Method', async () => {
      const result = await authService.authLogin('glaucia@email.com', '123456');

      expect(result).toEqual({ accessToken });
    });

    test('authForgotEmail Method', async () => {
      const result = await authService.authForgotEmail('glaucia@email.com');

      expect(result).toEqual(true);
    });

    test('authResetPassword Method', async () => {
      const result = await authService.authResetPassword('654321', resetMockToken);

      expect(result).toEqual({ accessToken });
    });

    test('authRegister Method', async () => {
      const result = await authService.authRegister(authRegisterMockDTO);

      expect(result).toEqual({ accessToken });
    });

  });
});