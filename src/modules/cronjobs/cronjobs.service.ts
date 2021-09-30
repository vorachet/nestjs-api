import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class CronjobsService {
  private readonly logger = new Logger(CronjobsService.name);

  @Cron('10 * * * * *')
  handleCron() {
    this.logger.debug('Called when the second is 10');
  }

  @Interval(10000)
  handleInterval() {
    this.logger.debug('Called every 10 seconds');
  }

  @Timeout(1000)
  handleTimeout() {
    this.logger.debug('Called once after 1 second');
  }
}
