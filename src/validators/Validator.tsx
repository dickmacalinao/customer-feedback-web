import { ValidatorInterface } from "./ValidatorInterface";
import { MandatoryValidator } from "./MandaroryValidator";

let validator = new ValidatorInterface();

export function validate(
  val: string,
  value: string | number | null | undefined
): boolean {
  switch (val) {
    case "required": {
      validator = new MandatoryValidator();
      break;
    }
    default: {
      throw Error("Unknown validator: " + val);
    }
  }
  return validator.validate(value);
}

export function getMessage(): string {
  return validator.getMessage();
}
