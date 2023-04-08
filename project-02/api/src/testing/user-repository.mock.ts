/**
 * file: src/testing/user-repository.mock.ts
 * date: 03/13/2023
 * description: file responsible for the 'UserRepository' mock
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { getRepositoryToken } from "@nestjs/typeorm"
import { UserEntity } from "../user/entity/user.entity"
import { userEntityMockList } from "./user-entity-list.mock"

export const userRepositoryMock = {

  provide: getRepositoryToken(UserEntity),
  useValue: {
    create: jest.fn(),
    save: jest.fn().mockResolvedValue(userEntityMockList[0]),
    find: jest.fn().mockResolvedValue(userEntityMockList),
    findOneBy: jest.fn().mockResolvedValue(userEntityMockList[0]),
    update: jest.fn(),
    delete: jest.fn(),
    exist: jest.fn().mockResolvedValue(true)
  }
}
