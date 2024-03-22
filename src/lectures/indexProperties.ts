export default function indexProperties() {
  const userInputElement = document.getElementById(
    "user-input"
  )! as HTMLInputElement;

  userInputElement.value = "Hi there!";

  interface ErrorContainer {
    //[prop: id]: string;
    [prop: string]: string;
  }

  const errorBag: ErrorContainer = {
    //1: 'Not a valid email!',
    email: "Not a valid email!",
    username: "Must start with a capital character!",
  };
} // end of export default function indexProperties()
