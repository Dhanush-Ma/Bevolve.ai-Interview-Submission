function unflattenMap(flattenMap) {
  const result = {};

  for (const key in flattenMap) {
    const nestedKeys = key.split("_");
    let current = result;
    for (let i = 0; i < nestedKeys.length - 1; i++) {
      const nestedKey = nestedKeys[i];
      current[nestedKey] = current[nestedKey] || {};
      current = current[nestedKey];
    }
    current[nestedKeys[nestedKeys.length - 1]] = flattenMap[key];
  }

  return result;
}

const input_one = {
  X_a_one: 10,
  X_a_two: 20,
  X_b_one: 10,
  X_b_two: 20,
  Y_a_one: 10,
  Y_a_two: 20,
  Y_b_one: 10,
  Y_b_two: 20,
};

const input_two = {
  X_a_one_foo: 10,
  X_a_two_bar: 20,
  X_b_one_foo: 10,
  X_b_two_baz: 20,
  Y_a_one_bar: 10,
  Y_a_two_foo: 20,
  Y_b_one_bar: 10,
  Y_b_two_foo: 20,
};

console.log(JSON.stringify(unflattenMap(input_one), null, 1));
console.log("******************************");
console.log(JSON.stringify(unflattenMap(input_two), null, 1));
