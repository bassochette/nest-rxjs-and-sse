export class MessageCommand {
  constructor(
    public readonly message: string,
    public readonly secret = false,
  ) {}
}
