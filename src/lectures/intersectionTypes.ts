export default function intersectionTypes() {
  // interface Admin {
  //   name: string;
  //   privileges: string[];
  // }

  // interface Employee {
  //   name: string;
  //   startDate: Date;
  // }

  type Admin = {
    name: string;
    privileges: string[];
  };

  type Employee = {
    name: string;
    startDate: Date;
  };

  // interface ElevatedEmployee extends Employee, Admin {}
  type ElevatedEmployee = Admin & Employee;

  const e1: ElevatedEmployee = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
  };

  type Combinable = string | number;
  type Numeric = number | boolean;

  type Universal = Combinable & Numeric;
} // end of export default function intersectionTypes()
