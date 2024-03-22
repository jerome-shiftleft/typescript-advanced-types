export default function functionReturnType() {

  // function printResult(result: number): undefined {
  //   console.log(`result: ${result}`);
  //   return;
  // }
  
  function printResult(result: number): void {
    console.log(`result: ${result}`);
  }

  function add(n1: number, n2: number): number {
    printResult(n1 + n2);
    return n1 + n2;
  }

  add(1, 2.4);
  //console.log(`result: ${result}`);

} // end of export default function functionReturnType()