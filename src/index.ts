type WatchedParameters = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchedParameters[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch speed: number) {}
}

console.log(watchedParameters);

//!output:
// [{ methodName: "move", parameterIndex: 0 }];
