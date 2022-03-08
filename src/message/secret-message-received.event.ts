export class SecretMessageReceivedEvent {
  type = 'secret-message-received';
  constructor(public readonly message: string) {}
}
