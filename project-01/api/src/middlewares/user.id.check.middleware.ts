/**
 * file: src/middlewares/user-id-check-middleware.ts
 * date: 02/08/2023
 * description: file responsible for the 'User Id Check Middleware' class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { BadRequestException, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

export class UserIdCheckMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: NextFunction) {
    if (isNaN(Number(req.params.id))) {
      throw new BadRequestException("The 'id' must be a number!");
    }

    next();
  }

}