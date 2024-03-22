export default function callbacks() {
  function printResult(result: number): void {
    console.log(`result: ${result}`);
  }

  function add(n1: number, n2: number): number {
    //printResult(n1 + n2);
    return n1 + n2;
  }

  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = add(n1, n2);
    cb(result);
  }

  // addAndHandle(1, 2.4, (result) => {
  //   console.log(`result: ${result}`);
  // });

  addAndHandle(1, 3.5, printResult);
} // end of export default function functionAsTypes()
