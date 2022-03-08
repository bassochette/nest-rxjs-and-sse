import { Injectable, Logger } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';
import { SecretMessageReceivedEvent } from './secret-message-received.event';
import { LogCommand } from '../log/log.command';

@Injectable()
export class SecretMessageSaga {
  @Saga()
  secretMessage(events$: Observable<any>): Observable<ICommand> {
    return events$.pipe(
      ofType(SecretMessageReceivedEvent),

      map(
        (event: SecretMessageReceivedEvent) =>
          new LogCommand(event.message, 'secret message'),
      ),
    );
  }
}
