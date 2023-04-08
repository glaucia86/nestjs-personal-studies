/**
 * file: src/user/user.service.spec.ts
 * date: 03/13/2023
 * description: file responsible for the unit tests of the 'UserService' class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Test, TestingModule } from '@nestjs/testing';
import { userRepositoryMock } from '../testing/user-repository.mock';
import { UserService } from './user.service';
import { userEntityMockList } from '../testing/user-entity-list.mock';
import { createUserMockDTO } from '../testing/create-user-dto.mock';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { updatePutUserMockDTO } from '../testing/update-put-user-dto.mock';
import { updatePatchUserMockDTO } from '../testing/update-patch-user-dto.mock';
import { UserEntity } from './entity/user.entity';

describe('UserService', () => {

  let userService: UserService;
  let userRepository: Repository<UserEntity>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, userRepositoryMock],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get(getRepositoryToken(UserEntity));
  });

  test('Validate User Service definition', () => {
    expect(userService).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  describe('Create a new User', () => {
    test('Method: CreateUser', async () => {

      jest.spyOn(userRepository, 'exist').mockResolvedValueOnce(false);

      const result = await userService.createUser(createUserMockDTO);

      expect(result).toEqual(userEntityMockList[0]);
    })
  });

  describe('List Users', () => {
    test('Method: ListUsers', async () => {

      const result = await userService.listUsers();

      expect(result).toEqual(userEntityMockList);
    });

    test('Method: listUserById', async () => {

      const result = await userService.listUserById(1)

      expect(result).toEqual(userEntityMockList[0]);
    });
  });

  describe('Update User', () => {
    test('Method: UpdateUser', async () => {

      const result = await userService.updateUser(1, updatePutUserMockDTO)

      expect(result).toEqual(userEntityMockList[0]);
    });

    test('Method: updateUserPartial', async () => {

      const result = await userService.updateUserPartial(1, updatePatchUserMockDTO)

      expect(result).toEqual(userEntityMockList[0]);
    });
  });

  describe('Delete User', () => {
    test('Method: DeleteUserById', async () => {

      const result = await userService.deleteUserById(1);

      expect(result).toEqual(true);
    });
  });
});