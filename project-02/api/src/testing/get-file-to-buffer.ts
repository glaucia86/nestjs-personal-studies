/**
 * file: src/testing/get-file-to-buffer.ts
 * date: 04/06/2023
 * description: file responsible for the 'fileToBuffer' function
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { ReadStream, createReadStream } from "fs";

export const getFileToBuffer = (filename: string) => {

  const readStream = createReadStream(filename);
  const chunks = [];

  return new Promise<{ buffer: Buffer, stream: ReadStream }>((resolve, reject) => {
    readStream.on('data', chunk => chunks.push(chunk));

    readStream.on('error', (err) => reject(err));

    readStream.on('close', () => {
      resolve({
        buffer: Buffer.concat(chunks),
        stream: readStream
      });
    })
  });
}