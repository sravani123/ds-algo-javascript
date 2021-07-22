// LeetCode Question -- Reverse a number
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

function reverse(x) {
  let n = 0
  while (x != 0) {
    let rem = x % 10;
    n = n * 10 + rem
    x = Math.floor(x / 10);
  }
  return x > Math.pow(2, 31) ? 0 : x < Math.pow(-2, 31)-1 ? 0 : n;
}

function reverseUsingStringOp(x) {
  let arr = x.toString().split('');
  let reverse = parseInt(arr.reverse().join(''));
  return x > Math.pow(2, 31) ? 0 : x < Math.pow(-2, 31)-1 ? 0 : reverse;
}

console.log(reverseUsingStringOp(651234));
