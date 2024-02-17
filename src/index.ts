interface Product {
  name: string;
  price: number;
}

type ReadOnlyProduct = {
  readonly [K in keyof Product]: Product[K];
};

let product: ReadOnlyProduct = {
  name: "aa",
  price: 1,
};

////////////////////////////////////////////////////////////////
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

let product2: ReadOnly<Product> = {
  name: "a",
  price: 1,
};

////////////////////////////////////////////////////////////////
type Optional<T> = {
[K in keyof T]?: T[K];
}

////////////////////////////////////////////////////////////////
type Nullable<T> = {
  [K in keyof T]: T[K] |null;
}