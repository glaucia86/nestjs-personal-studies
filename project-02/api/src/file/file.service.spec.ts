/**
 * file: src/file/file.service.spec.ts
 * date: 04/06/2023
 * description: file responsible for the 'file' service unit tests
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Test, TestingModule } from "@nestjs/testing";
import { FileService } from "./file.service";
import { getPhoto } from './../testing/get-photo.mock';

describe('FileService', () => {

  let fileService: FileService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileService],
    }).compile();

    fileService = module.get<FileService>(FileService)
  });

  test('Validate a defition', () => {
    expect(fileService).toBeDefined();
  });

  describe('File Service Test', () => {

    test('Upload Method', async () => {
      const photo = await getPhoto();
      const filename = 'photo-test.png'
      fileService.upload(photo, filename);
    });

  });
})