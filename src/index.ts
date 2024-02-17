function echo1<T>(value: T): T {
  return value;
}

echo1(true); // we can write in here what we want
////////////////////////////////////////////////////////////////
function echo2<T extends number | string>(value: T): T {
  return value;
}

echo2(33); //we can write only number or string
////////////////////////////////////////////////////////////////
function echo3<T extends { name: string }>(value: T): T {
  return value;
}

echo3({ name: "fsdjsd" });
////////////////////////////////////////////////////////////////
interface Person {
  name: string;
}

function echo4<T extends Person>(value: T): T {
  return value;
}

echo4({ name: "jdjjd" });
////////////////////////////////////////////////////////////////
class Product {
  constructor(public title: string) {}
}

class Egg extends Product {}

function echo5<T extends Product>(value: T): T {
  return value;
}

echo5(new Egg("skdck"));
