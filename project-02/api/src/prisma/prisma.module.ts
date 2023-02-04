/**
 * file: src/prisma/prisma.module.ts
 * date: 02/04/2023
 * description: file responsible for the 'Prisma' module
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})

export class PrismaModule {

}