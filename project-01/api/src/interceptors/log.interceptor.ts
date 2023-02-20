/**
 * file: src/interceptors/log.interceptor.ts
 * date: 02/06/2023
 * description: file responsible for the 'LogInterceptor' class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {

    const initialDate = Date.now();

    return next.handle().pipe(tap(() => {

      const request = context.switchToHttp().getRequest();

      console.log(`URL: ${request.method} ${request.url}`);
      console.log(`Tempo de execução: ${Date.now() - initialDate} ms`);
    }));
  }

}