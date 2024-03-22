enum Role {
  ADMIN,
  AUTHOR,
  READ_ONLY
}

const person = {
  name: "Jerome",
  age: 30,
  hobbies: ["sex", "programming"],
  role: Role.ADMIN,
};

person.hobbies.map((hobby) => {
  console.log(hobby);
});

//person.role.push("admin");
person.role = Role.ADMIN;

console.log(`role: ${person.role}`);

type Activity = {
  id: number;
  title: string;
};

let favoriteActivities: Array<Activity>;
favoriteActivities = [
  {
    id: 1,
    title: "video games",
  },
  {
    id: 2,
    title: "programming",
  },
];

console.log(`favoriteActivities: ${favoriteActivities}`);

console.log(person.name);
