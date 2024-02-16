// exercise 1
type User = {
  name: string;
  age: number;
  occupation?: string;
};

let users: User[] = [
  {
    name: "John Smith",
    age: 30,
    occupation: "Software engineer",
  },
  {
    name: "Kate Müller",
    age: 28,
  },
];

//exercise 2
//Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these
type Bird = {
  fly: () => void;
};
type Fish = {
  swim: () => void;
};
type Pet = Bird | Fish;

//exercise 3
// Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”,etc.

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

