import { Controller, Logger, Sse } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';
import { EventBus, ofType } from '@nestjs/cqrs';
import { MessageReceivedEvent } from '../message/message-received.event';

@Controller('sse')
export class SseController {
  constructor(private eventBus: EventBus) {}

  @Sse('')
  sse(): Observable<any> {
    return this.eventBus.pipe(
      ofType(MessageReceivedEvent),
      map((event) => {
        Logger.debug(JSON.stringify(event), SseController.name);
        return JSON.stringify(event);
      }),
    );
  }
}
