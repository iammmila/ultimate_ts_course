class KeyValuePair<K, V> {
  //K = key, V = value; or we can also write: TValue, Kvalue, what you want
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<number, string>(1, "sdkd");
pair.key.toFixed(2);
