export default function unknownType() {
  let userInput: unknown;
  let userName: string;
  userInput = 5;
  userInput = "Jerome";
  if (typeof userInput === "string") {
    userName = userInput;
  }
} // end of export default function unknownType()
