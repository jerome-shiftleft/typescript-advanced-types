export default function typeCasting() {

  //const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
  const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
  
  userInputElement.value = 'Hi there!';

} // end of export default function typeCasting()