export default function nullishCoalescing() {
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

  const result = add("jerome", "2.5");
  console.log(`result: ${result}`);
  const splittedResult = result.split(".");
  console.log(`splittedResult: ${splittedResult}`);

  const fetchedUserData = {
    id: "u1",
    name: "jerome",
    job: { title: "developer", description: "typescript" },
  };

  //console.log(fetchedUserData.job && fetchedUserData.job.title);
  console.log(fetchedUserData?.job?.title);

  //const userInput = (document.getElementById('user-input') as HTMLInputElement)?.value;
  const userInput = "";
  const storedData = userInput ?? "DEFAULT";

  console.log(`storedData: ${storedData}`);
} // end of export default function nullishCoalescing()
