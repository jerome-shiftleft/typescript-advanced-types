export default function functionAsTypes() {
  function printResult(result: number): void {
    console.log(`result: ${result}`);
  }

  function add(n1: number, n2: number): number {
    //printResult(n1 + n2);
    return n1 + n2;
  }

  //printResult(add(1, 2.4));

  let combineValues: (a: number, b: number) => number;
  //let combineValues: (a: number) => void;

  combineValues = add;
  //combineValues = printResult;

  console.log(combineValues(1, 3.4));
} // end of export default function functionAsTypes()
