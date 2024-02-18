//!EXAMPLE 1
// class Component {
//   insertInDOM() {}
// }
// class ProfileComponent extends Component{}

//!EXAMPLE 2
function Component(constructor: Function) {
  console.log("Component decorato₹ called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("inserting the component in the DOM");
  };
}

@Component
class ProfileComponent {}
