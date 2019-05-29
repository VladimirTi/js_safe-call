function safeCall (fn) {
  try {
    fn();
    console.log(true);
  } catch (error) {
    console.log(false);
  }
}

Function.prototype.safeCall = function(arg) {
  try {
    this(arg);
    console.log(true);
  } catch (error) {
    console.log(false);
  }
}

function anyFunc (arg) {
  return JSON.parse(arg)
}

anyFunc.safeCall('abc') //false
anyFunc.safeCall('{"name": "Michael", "age": 45}'); //true

safeCall(() => console.log('Hello!')); // true
safeCall(() => JSON.parse('abc')); // false
safeCall(() => false); // true
safeCall(() => abc); // false