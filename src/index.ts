abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("rendering a circle...");
  }
}

let shape = new Circle(1, "djdj");
shape.render(); //rendering a circle
