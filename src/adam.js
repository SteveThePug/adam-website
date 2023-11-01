console.log("Adam French ~2022");

export function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
export function randFloat(min, max) {
  return Math.random() * (max - min) + min;
}
export function zeroFunc(initial, time) {
  return initial * Math.exp(-time);
}
export function approachNumber(startNum, endNum, interval) {
  return -interval * (endNum - startNum);
}
export function createRandomArr(length, min, max) {
  arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(randFloat(min, max));
  }
  return arr;
}
