import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from './fileupload.config.service';
import { MinioService } from 'nestjs-minio-client';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { FileUploadedEvent } from './events/file-uploaded.event';

@Injectable()
export class FileuploadService {
  private readonly logger = new Logger(FileuploadService.name);

  constructor(
    private configService: ConfigService,
    private readonly minioClient: MinioService,
    private eventEmitter: EventEmitter2,
  ) {}

  async putFile(
    bucketName: string,
    objectName: string,
    fileBuffer: string,
    objectMetadata: any,
  ) {
    const fileUploadedEvent = new FileUploadedEvent();
    fileUploadedEvent.name = objectName;
    fileUploadedEvent.description = objectName;
    this.eventEmitter.emit('file.uploaded', fileUploadedEvent);
    return this.minioClient.client.putObject(
      bucketName,
      objectName,
      fileBuffer,
      objectMetadata,
    );
  }
}
