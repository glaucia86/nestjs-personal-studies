/**
 * file: src/testing/user-service.mock.ts
 * date: 03/20/2023
 * description: file responsible for the 'userService' mock
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { UserService } from '../user/user.service';
import { userEntityMockList } from './user-entity-list.mock';

export const userServiceMock = {

  provide: UserService,
  useValue: {
    listUserById: jest.fn().mockReturnValue(userEntityMockList[0]),
    createUser: jest.fn().mockResolvedValue(userEntityMockList[0]),
    listUsers: jest.fn().mockResolvedValue(userEntityMockList),
    updateUser: jest.fn().mockResolvedValue(userEntityMockList[0]),
    updateUserPartial: jest.fn().mockReturnValue(userEntityMockList[0]),
    deleteUserById: jest.fn().mockResolvedValue(true),
    validateUserExists: jest.fn().mockReturnValue(true),
  }
}
