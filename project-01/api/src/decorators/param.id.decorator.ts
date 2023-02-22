/**
 * file: src/decorators/param-id-decorator.ts
 * date: 02/13/2023
 * description: file responsible for the 'ParamId' decorator
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ParamId = createParamDecorator((_data: unknown, context: ExecutionContext) => {
  return Number(context.switchToHttp().getRequest().params.id);
});