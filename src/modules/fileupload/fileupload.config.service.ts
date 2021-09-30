export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {};
    this.envConfig.host = process.env.FILEUPLOAD_MINIO_HOST;
    this.envConfig.port = +process.env.FILEUPLOAD_MINIO_PORT;
    this.envConfig.accessKey = process.env.FILEUPLOAD_MINIO_ACCESS_KEY;
    this.envConfig.secretKey = process.env.FILEUPLOAD_MINIO_SECRET_KEY;
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
