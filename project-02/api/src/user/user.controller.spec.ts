/**
 * file: src/user/user.controller.spec.ts
 * date: 04/08/2023
 * description: file responsible for the 'User' controller unit tests
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Test, TestingModule } from "@nestjs/testing";
import { AuthGuard } from "../guards/auth.guard";
import { RoleGuard } from "../guards/role.guard";
import { guardMock } from "../testing/guard.mock";
import { updatePatchUserMockDTO } from './../testing/update-patch-user-dto.mock';
import { userServiceMock } from "../testing/user-service.mock";
import { createUserMockDTO } from './../testing/create-user-dto.mock';
import { userEntityMockList } from "../testing/user-entity-list.mock";
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { updatePutUserMockDTO } from "../testing/update-put-user-dto.mock";

describe('User Controller', () => {

  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [userServiceMock],
    })
      .overrideGuard(AuthGuard)
      .useValue(guardMock)
      .overrideGuard({ RoleGuard })
      .useValue(guardMock)
      .compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  test('Validate a definition', () => {
    expect(userController).toBeDefined();
    expect(userService).toBeDefined();
  });

  describe('Testing the application of Guards in User Controller ', () => {
    test('If the Guards are applied', () => {
      const guards = Reflect.getMetadata('__guards__', UserController);

      expect(guards.length).toEqual(2);
      expect(new guards[0]()).toBeInstanceOf(AuthGuard);
      expect(new guards[1]()).toBeInstanceOf(RoleGuard);
    });
  });

  describe('Create', () => {
    test('Create Method', async () => {
      const result = await userController.create(createUserMockDTO);

      expect(result).toEqual(userEntityMockList[0]);
    });
  });

  describe('List', () => {
    test('List Method', async () => {
      const result = await userController.list();

      expect(result).toEqual(userEntityMockList);
    });
    test('List by Id Method', async () => {
      const result = await userController.listById(1);

      expect(result).toEqual(userEntityMockList[0]);
    });
  });

  describe('Update', () => {
    test('Update Method', async () => {
      const result = await userController.update(updatePutUserMockDTO, 1)

      expect(result).toEqual(userEntityMockList[0]);
    });

    test('Update Partial Method', async () => {
      const result = await userController.updatePartial(updatePatchUserMockDTO, 1)

      expect(result).toEqual(userEntityMockList[0]);
    });
  });

  describe('Delete', () => {
    test('Delete Method', async () => {
      const result = await userController.delete(1);

      expect(result).toEqual({ success: true })
    });
  });

});