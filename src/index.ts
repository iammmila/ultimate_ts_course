let employee: {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  retire: (date: Date) => console.log(date),
};
// in readonly mode we cannot change the value;
//void = dont return anythings 