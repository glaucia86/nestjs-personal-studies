/**
 * file: src/testing/auth-register-dto-mock.ts
 * date: 04/14/2023
 * description: file responsible for the 'auth-register' dto mock
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { AuthRegisterDTO } from "../auth/dto/auth-register.dto";

export const authRegisterMockDTO: AuthRegisterDTO = {
  email: 'glaucia@email.com',
  name: 'Glaucia Lemos',
  password: '123456'
}

