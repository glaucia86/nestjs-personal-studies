/**
 * file: src/user/user.service.spec.ts
 * date: 03/13/2023
 * description: file responsible for the unit tests of the 'UserService' class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Test, TestingModule } from '@nestjs/testing';
import { userRepositoryMock } from '../testing/user-repository.mock';
import { UserService } from './user.service';
import { userEntityList } from '../testing/user-entity-list.mock';
import { createUserMockDto } from '../testing/create-user-dto.mock';

describe('UserService', () => {

  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, userRepositoryMock],
    }).compile();

    userService = module.get<UserService>(UserService);

  });

  test('Validate User Service definition', () => {
    expect(userService).toBeDefined();
  });

  describe('Validate Create a new User', () => {
    test('Method: CreateUser', async () => {

      const result = await userService.createUser(createUserMockDto);

      expect(result).toEqual(userEntityList[0]);
    })
  });



  //describe('Read', () => { });
  //describe('Update', () => { });
  //describe('Delete', () => { });

});