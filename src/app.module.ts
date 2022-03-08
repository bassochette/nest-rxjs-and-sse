import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SseController } from './sse/sse.controller';
import { MessageModule } from './message/message.module';
import { CqrsModule } from '@nestjs/cqrs';
import { LogModule } from './log/log.module';

@Module({
  imports: [MessageModule, CqrsModule, LogModule],
  controllers: [AppController, SseController],
  providers: [AppService],
})
export class AppModule {}
