/**
 * file: src/auth/auth.controller.ts
 * date: 02/20/2023
 * description: file responsible for the 'auth' controller
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import {
  Body,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  UploadedFiles
} from '@nestjs/common';
import {
  AuthLoginDTO,
  AuthForgotEmailDTO,
  AuthRegisterDTO,
  AuthResetPasswordDTO
} from './dto/index'
import { AuthService } from './auth.service';
import { FileService } from './../file/file.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { User } from 'src/decorators/user.decorator';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { join } from 'path';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
    private readonly fileService: FileService
  ) { }

  @Post('login')
  async login(@Body() { email, password }: AuthLoginDTO) {
    return this.authService.authLogin(email, password);
  }

  @Post('register')
  async register(@Body() body: AuthRegisterDTO) {
    return this.authService.authRegister(body);
  }

  @Post('forgot-email')
  async forgotEmail(@Body() { email }: AuthForgotEmailDTO) {
    return this.authService.authForgotEmail(email)
  }

  @Post('reset-password')
  async resetPassword(@Body() { password, token }: AuthResetPasswordDTO) {
    return this.authService.authResetPassword(password, token);
  }

  @UseGuards(AuthGuard)
  @Post('me')
  async me(@User() user) {
    return { user };
  }

  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard)
  @Post('photo')
  async uploadPhoto(@User() user, @UploadedFile() photo: Express.Multer.File) {

    const path = join(__dirname, '..', '..', 'storage', 'photos', `photo-${user.id}.png`);

    try {
      await this.fileService.upload(photo, path);
    } catch (error) {
      throw new BadRequestException(error)
    }

    return { success: true };
  }

  @UseInterceptors(FilesInterceptor('files'))
  @UseGuards(AuthGuard)
  @Post('files')
  async uploadFiles(@User() user, @UploadedFiles() files: Express.Multer.File[]) {
    return files;

  }

  @UseInterceptors(FileFieldsInterceptor([{
    name: 'photo',
    maxCount: 1
  }, {
    name: 'documents',
    maxCount: 10
  }]))
  @UseGuards(AuthGuard)
  @Post('files-fields')
  async uploadFilesFields(@User() user, @UploadedFiles() files: { photo: Express.Multer.File, documents: Express.Multer.File[] }) {
    return files;

  }
}