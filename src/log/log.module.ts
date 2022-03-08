import { Module } from '@nestjs/common';
import { LogHandler } from './log.handler';

@Module({
  providers: [LogHandler],
})
export class LogModule {}
