/**
 * file: src/file/file.module.ts
 * date: 03/01/2023
 * description: file responsible for the 'file' module
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Module } from "@nestjs/common";
import { FileService } from "./file.service";

@Module({
  providers: [FileService],
  exports: [FileService]
})
export class FileModule { }
