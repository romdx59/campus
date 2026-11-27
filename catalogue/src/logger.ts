export interface Logger {
  log(message: string): void;
  error(message: string): void;
}

export class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`[LOG] ${message}`);
  }
  error(message: string): void {
    console.error(`[ERREUR] ${message}`);
  }
}

export class SilentLogger implements Logger {
  log(_message: string): void {}
  error(_message: string): void {}
}

export class TimestampLogger implements Logger {
  private now(): string {
    return new Date().toLocaleTimeString('fr-FR');
  }
  log(message: string): void {
    console.log(`[${this.now()}] ${message}`);
  }
  error(message: string): void {
    console.error(`[${this.now()}] ERREUR : ${message}`);
  }
}