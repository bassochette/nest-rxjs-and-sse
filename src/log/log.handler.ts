import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LogCommand } from './log.command';
import { Logger } from '@nestjs/common';

@CommandHandler(LogCommand)
export class LogHandler implements ICommandHandler<LogCommand> {
  async execute(logCommand: LogCommand) {
    Logger.verbose(logCommand.message, logCommand.context);
  }
}
