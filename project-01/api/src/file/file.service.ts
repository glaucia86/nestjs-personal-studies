/**
 * file: src/file/file.service.ts
 * date: 03/01/2023
 * description: file responsible for the 'file' service
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Injectable } from "@nestjs/common";
import { writeFile } from 'fs/promises';

@Injectable()
export class FileService {

  async upload(file: Express.Multer.File, path: string) {
    return writeFile(path, file.buffer);
  }
}