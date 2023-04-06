/**
 * file: src/file/file.service.ts
 * date: 03/01/2023
 * description: file responsible for the 'file' service
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Injectable } from "@nestjs/common";
import { PathLike } from "fs";
import { writeFile } from 'fs/promises';
import { join } from "path";

@Injectable()
export class FileService {

  getDestinationPath() {
    return join(__dirname, '..', '..', 'storage', 'photos');
  }

  async upload(file: Express.Multer.File, filename: string) {
    const path: PathLike = join(this.getDestinationPath(), filename)
    return writeFile(path, file.buffer);
  }
}