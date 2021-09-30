import { Module } from '@nestjs/common';
import { CronjobsModule } from './modules/cronjobs/cronjobs.module';
import { FileuploadModule } from './modules/fileupload/fileupload.module';

@Module({
  imports: [CronjobsModule, FileuploadModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
