import {
  Body,
  ConsoleLogger,
  Controller,
  Post,
  Param,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { FileuploadService } from './fileupload.service';
import { UploadRequest } from './interfaces/upload-request';
import { UploadResponse } from './interfaces/upload-response';

const bucketName = 'europetrip';

@Controller('fileupload')
@ApiTags('fileupload')
export class FileuploadController {
  private readonly logger = new ConsoleLogger(FileuploadController.name);
  constructor(private readonly fileuploadService: FileuploadService) {}

  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @Post()
  async upload(
    @Body() body: UploadRequest,
    @UploadedFile() file: Express.Multer.File,
  ) {
    /*
    curl http://localhost:3030/api/fileupload -F 'file=@./package.json' -F 'name=test' -F 'contentType=image/png'
    */
    const ret = await this.fileuploadService.putFile(
      bucketName,
      body.name,
      file.buffer.toString(),
      {
        'Content-Type': body.contentType,
      },
    );
    this.logger.log(ret);
  }
}
