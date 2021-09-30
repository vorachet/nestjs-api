import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MinioModule } from 'nestjs-minio-client';
import { FileuploadController } from './fileupload.controller';
import { FileuploadService } from './fileupload.service';
import { ConfigService } from './fileupload.config.service';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    MinioModule.register({
      endPoint: new ConfigService().get('host'),
      port: new ConfigService().get('port'),
      useSSL: false,
      accessKey: new ConfigService().get('accessKey'),
      secretKey: new ConfigService().get('secretKey'),
    }),
  ],
  controllers: [FileuploadController],
  providers: [ConfigService, FileuploadService],
})
export class FileuploadModule {}
