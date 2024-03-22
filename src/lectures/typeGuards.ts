export default function typeGuards() {


  type Admin = {
    name: string;
    privileges: string[];
  };

  type Employee = {
    name: string;
    startDate: Date;
  };
  
  type ElevatedEmployee = Admin & Employee;

  const e1: ElevatedEmployee = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
  };

  type Combinable = string | number;
  type Numeric = number | boolean;

  type Universal = Combinable & Numeric;

  function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
      return `${a}${b}`;
    }
    return a + b;
  }

  const result = add(1, '2.5');
  console.log(`result: ${result}`);

  type UnknownEmployee = Employee | Admin;

  function printEmployeeInformation(emp: UnknownEmployee) {
    console.log(`name: ${emp.name}`);
    if ('privileges' in emp) {
      console.log(`privileges: ${emp.privileges}`);
    }
    if('startDate' in emp) {
      console.log(`startDate: ${emp.startDate}`);
    }    
  }

  printEmployeeInformation(e1);

} // end of export default function typeGuards()
