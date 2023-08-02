let speed: number | null = null;
let ride = {
  // Falsy(undefined, null, '', false, 0)
  // Nullish coalescing operator
  speed: speed ?? 30,
  // ! this means that: if speed is not null or undefined, use that value. otherwise, use 30 as a default value
  
};
