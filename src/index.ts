type ComponentOptions = { selector: string };

//Decorator Factory
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorato₹ called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("inserting the component in the DOM");
    };
  };
}

@Component({ selector: "#my-profile" })
class ProfileComponent {}
