import {
  CommandHandler,
  EventBus,
  EventPublisher,
  ICommandHandler,
} from '@nestjs/cqrs';
import { MessageCommand } from './message.command';
import { MessageReceivedEvent } from './message-received.event';
import { Logger } from '@nestjs/common';
import { SecretMessageReceivedEvent } from './secret-message-received.event';

@CommandHandler(MessageCommand)
export class MessageHandler implements ICommandHandler<MessageCommand> {
  constructor(private eventBus: EventBus) {}

  async execute(command: MessageCommand) {
    Logger.debug(JSON.stringify(command), MessageHandler.name);
    if (command.secret) {
      this.eventBus.publish(new SecretMessageReceivedEvent(command.message));
    } else {
      this.eventBus.publish(new MessageReceivedEvent(command.message));
    }
  }
}
