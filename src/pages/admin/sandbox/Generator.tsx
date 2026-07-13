import SubmitButton from "../../../components/common/SubmitButton";

import { useState } from "react";

// Infinite generator function that generates numbers starting from 1
const generateNumber = function* () {
  let i = 1;
  while (true) {
    yield i++;
  }
};

/*
const generateNumber = function* (start: number = 1, end: number = 10) {
  for (let i = start; i < end; i++) {
    console.log("Generating number:", i);
    yield i;
  }
  console.log("Generator has finished generating numbers.");
  return end;
};
*/

export default function Generator() {
  const generator = generateNumber();

  const [value, setValue] = useState<number>(generator.next().value);

  const onClick = () => {
    setValue(generator.next().value);
  };

  return (
    <>
      Value: {value}
      <SubmitButton label="Generate Next" onSubmit={onClick} />
    </>
  );
}
