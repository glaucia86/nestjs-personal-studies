/**
 * file: src/testing/get-photo.mock.ts
 * date: 04/06/2023
 * description: file responsible for the 'photo' mock
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { join } from "path";
import { getFileToBuffer } from "./get-file-to-buffer";

export const getMockPhoto = async () => {

  const { buffer, stream } = await getFileToBuffer(join(__dirname, 'photo.png'));

  const photo: Express.Multer.File = {
    fieldname: 'file',
    originalname: 'photo.png',
    encoding: '7bit',
    mimetype: 'image/png',
    size: 1024 * 50,
    stream,
    destination: '',
    filename: 'file-name',
    path: 'file-path',
    buffer,
  }

  return photo;
}
