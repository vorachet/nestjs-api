import { ApiProperty } from '@nestjs/swagger';

export class UploadRequest {
  @ApiProperty({ example: 'filename' })
  name: string;
  @ApiProperty({ example: 'image/png' })
  contentType: string;
}
