let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let remainderArray = input.map((item) => {
  return item % 42;
});
let arrChk = new Array(10).fill(0);

let count = 0;

for (let i = 0; i < remainderArray.length; i++) {
  if (arrChk[i] !== 1) {
    count++;
    for (let j = i + 1; j < remainderArray.length; j++) {
      if (remainderArray[i] === remainderArray[j]) {
        arrChk[j] = 1;
      }
    }
  }
}

console.log(count);

// solution(39, 40, 41, 42, 43, 44, 82, 83, 84, 85);
