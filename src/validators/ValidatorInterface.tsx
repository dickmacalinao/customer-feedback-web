export class ValidatorInterface {
  validate(value: string | number | null | undefined): boolean {
    throw new Error("Method 'validate()' must be implemented with" + value);
  }
  getMessage(): string {
    throw new Error("Method 'getMessage()' must be implemented.");
  }
}
