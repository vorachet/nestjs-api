export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {};
    this.envConfig.host = process.env.API_HOST || 3000;
    this.envConfig.port = process.env.API_PORT || 3000;
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
