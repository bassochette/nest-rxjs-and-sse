import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { MessageCommand } from './message.command';

@Controller('message')
export class MessageController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  createMessage(@Body('message') message: string) {
    return this.commandBus.execute(new MessageCommand(message));
  }

  @Post('secret')
  createSecretMessage(@Body('message') message: string) {
    return this.commandBus.execute(new MessageCommand(message, true));
  }
}
