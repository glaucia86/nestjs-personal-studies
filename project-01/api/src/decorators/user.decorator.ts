/**
 * file: src/decorators/user.decorator.ts
 * date: 02/22/2023
 * description: file responsible for the 'user' decorator
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { createParamDecorator, ExecutionContext, NotFoundException } from '@nestjs/common';

export const User = createParamDecorator((filter: string, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();

  if (request.user) {
    if (filter) {
      return request.user[filter];
    } else {
      return request.user;
    }
  } else {
    throw new NotFoundException("User not found in the request.")
  }
});