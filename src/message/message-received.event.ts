export class MessageReceivedEvent {
  type = 'message-received';
  constructor(public readonly message: string) {}
}
