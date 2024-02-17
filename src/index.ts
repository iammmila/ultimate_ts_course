class KeyValuePair {
  constructor(public key: number, public value: string) {}
}

let pair = new KeyValuePair(1, "value");
// when key is string, we can access easily methods when we write : pair.key.
// but when our number is any type, we can not accces any methods or properties.

// also it can be that key can be number or string, in this case, we must create new class:
class StringKeyValuePair {
  constructor(public key: string, public value: string) {}
}
let pair2 = new StringKeyValuePair("sjjs", "sdknv");
