function safeCall (fn) {
  try {
    fn();
    return true;
  } catch (error) {
    return false;
  }
}

Function.prototype.safeCall = function(...arg) {
  try {
    const result = this(...arg);
    return result;
  } catch (error) {
    return null;
  }
}

function anyFunc (arg) {
  return JSON.parse(arg);
}

anyFunc.safeCall('abc'); //false
anyFunc.safeCall('{"name": "Michael", "age": 45}'); //true

safeCall(() => console.log('Hello!')); // true
safeCall(() => JSON.parse('abc')); // false
safeCall(() => false); // true
safeCall(() => abc); // false
