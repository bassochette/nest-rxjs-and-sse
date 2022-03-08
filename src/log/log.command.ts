export class LogCommand {
  constructor(
    public readonly message: string,
    public readonly context?: string,
  ) {}
}
