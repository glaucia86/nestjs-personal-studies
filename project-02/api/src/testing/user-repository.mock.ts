/**
 * file: src/testing/user-repository.mock.ts
 * date: 03/13/2023
 * description: file responsible for the 'UserRepository' mock
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { getRepositoryToken } from "@nestjs/typeorm"
import { UserEntity } from "../user/dto/entity/user.entity"
import { userEntityList } from "./user-entity-list.mock"

export const userRepositoryMock = {

  provide: getRepositoryToken(UserEntity),
  useValue: {
    create: jest.fn(),
    save: jest.fn().mockResolvedValue(userEntityList[0]),
    find: jest.fn(),
    findOneBy: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    exist: jest.fn()
  }
}
