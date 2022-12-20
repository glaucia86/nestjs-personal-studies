import { PrismaService } from './prisma.service';
/**
 * file: src/infra/database/database.module.ts
 * date: 12/20/2022
 * description: file responsible for the database module
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Module } from "@nestjs/common";

@Module({
  providers: [PrismaService]
})

export class DatabaseModule { };
