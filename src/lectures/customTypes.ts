export default function customTypes() {
  type Combinable = number | string;

  function combine(
    input1: Combinable,
    input2: Combinable,
    resultType: "number" | "string"
  ) {
    let result;
    // if (typeof input1 === "number" && typeof input2 === "number") {
    if (resultType === "number") {
      result = Number(input1) + Number(input2);
    } else {
      result = `${input1.toString()}${input2.toString()}`;
    }

    return result;
  } // end of function add()

  const result = combine(1, 2.4, "string");
  console.log(`result: ${result}`);
} // end of export default function customTypes()
