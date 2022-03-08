import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageHandler } from './message.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { SecretMessageSaga } from './secret-message.saga';

@Module({
  imports: [CqrsModule],
  controllers: [MessageController],
  providers: [MessageHandler, SecretMessageSaga],
})
export class MessageModule {}
