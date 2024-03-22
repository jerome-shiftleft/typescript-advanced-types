export default function neverType() {
  function generateError(message: string, code: number): never {
    throw { messsage: message, errorCode: code };
    //while (true) {}
  }

  const result = generateError("An error occured", 500);
  console.log(result);
} // end of export default function neverType()
