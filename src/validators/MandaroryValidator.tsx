import { ValidatorInterface } from "./ValidatorInterface";

export class MandatoryValidator extends ValidatorInterface {
  validate(value: string | number | null | undefined): boolean {
    return !!value;
  }
  getMessage(): string {
    return "This is a required field.";
  }
}
