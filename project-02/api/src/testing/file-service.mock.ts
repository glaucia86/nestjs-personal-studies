/**
 * file: src/testing/file-service.mock.ts
 * date: 04/14/2023
 * description: file responsible for the 'file' service mock
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { FileService } from './../file/file.service';

export const fileServiceMock = {

  provide: FileService,
  useValue: {
    upload: jest.fn(),
    getDestinationPath: jest.fn().mockResolvedValue(''),
  }
}
