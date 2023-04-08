/**
 * file: src/testing/guard.mock.ts
 * date: 04/08/2023
 * description: file responsible for mocking the 'Guard' class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { CanActivate } from '@nestjs/common';

export const guardMock: CanActivate = {
  canActivate: jest.fn(() => true)
}