/**
 * file: src/testing/user-service.mock.ts
 * date: 03/20/2023
 * description: file responsible for the 'userService' mock
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { UserService } from '../user/user.service';

export const userServiceMock = {

  provide: UserService,
  useValue: {
    listUserById: jest.fn(),
    createUser: jest.fn(),
    listUsers: jest.fn(),
    updateUser: jest.fn(),
    updateUserPartial: jest.fn(),
    deleteUserById: jest.fn(),
    validateUserExists: jest.fn(),
  }
}
