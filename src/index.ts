let employee: {
  readonly id: number;
  name?: string;
  func: (date: Date) => void;
} = {
  id: 1,
  func(date) {
    console.log(date);
  },
};
employee.name = "mila";
console.log(employee);
