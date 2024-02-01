let level;
level = 1;
level = "2";
//!there is no error message - any type of error

function render(document) {
  console.log(document);
}
//you see there is an error message. to solve this:


function render1(document: any) {
  console.log(document);
}


// or change tsconfig.json, after changing the config, you see there is no error message