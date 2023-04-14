/**
 * file: src/auth/auth.controller.spec.ts
 * date: 04/11/2023
 * description: file responsible for the tests of the 'AuthController' class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthGuard } from '../guards/auth.guard';
import { guardMock } from '../testing/guard.mock';
import { authServiceMock } from '../testing/auth-service.mock';
import { fileServiceMock } from '../testing/file-service.mock';
import { authLoginMockDTO } from '../testing/auth-login-dto.mock';
import { accessToken } from '../testing/access-token.mock';
import { authRegisterMockDTO } from '../testing/auth-register-dto.mock';
import { authForgotEmailMockDTO } from '../testing/auth-forgot-email-dto.mock';
import { authResetPasswordMockDTO } from '../testing/auth-reset-password-mock';
import { userEntityMockList } from '../testing/user-entity-list.mock';
import { getMockPhoto } from '../testing/get-photo.mock';

describe('AuthController', () => {

  let authController: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [authServiceMock, fileServiceMock],
    })
      .overrideGuard(AuthGuard)
      .useValue(guardMock)
      .compile();

    authController = module.get<AuthController>(AuthController);
  });

  test('Validate User Service definition', () => {
    expect(authController).toBeDefined();
  });

  describe('Authentication Workflow', () => {

    test('Login Method', async () => {
      const result = await authController.login(authLoginMockDTO)

      expect(result).toEqual({ accessToken })
    });

    test('Register Method', async () => {
      const result = await authController.register(authRegisterMockDTO)

      expect(result).toEqual({ accessToken })
    });

    test('Register Method', async () => {
      const result = await authController.forgotEmail(authForgotEmailMockDTO)

      expect(result).toEqual(true)
    });

    test('Reset Password Method', async () => {
      const result = await authController.resetPassword(authResetPasswordMockDTO)

      expect(result).toEqual({ accessToken })
    });
  });

  describe('Routes Authenticated', () => {

    test('Me Method', async () => {
      const result = await authController.me(userEntityMockList[0]);

      expect(result).toEqual(userEntityMockList[0])
    });

    test('Upload Photo Method', async () => {
      const photo = await getMockPhoto();
      const result = await authController.uploadPhoto(userEntityMockList[0], photo)

      expect(result).toEqual(photo);
    });
  });

});