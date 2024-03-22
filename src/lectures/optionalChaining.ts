export default function optionalChaining() {
  type Combinable = string | number;

  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
  function add(a: string, b: number): string;
  function add(a: number, b: string): string;

  function add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
      return `${a}${b}`;
    }
    return a + b;
  }

  const result = add('jerome', "2.5");
  console.log(`result: ${result}`);
  const splittedResult = result.split(".");
  console.log(`splittedResult: ${splittedResult}`);
} // end of export default function optionalChaining()
