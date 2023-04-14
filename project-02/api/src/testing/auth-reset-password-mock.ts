/**
 * file: src/testing/auth-login-dto-mock.ts
 * date: 04/14/2023
 * description: file responsible for the 'auth-login' dto mock
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { AuthResetPasswordDTO } from "../auth/dto/auth-reset-password.dto";
import { resetMockToken } from "./reset-token.mock";

export const authResetPasswordMockDTO: AuthResetPasswordDTO = {
  password: '654321',
  token: resetMockToken
}

