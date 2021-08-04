function solution(array, commands) {
  var answer = [];
  var count = 0;
  while (count < commands.length) {
    let temp = [];
    let one = commands[count][0];
    let two = commands[count][1];
    let thr = commands[count][2];
    for (let i = one - 1; i < two; i++) {
      temp.push(array[i]);
    }
    temp.sort((a, b) => a - b);
    answer.push(temp[thr - 1]);
    count++;
  }
  return answer;
}


// --- slice 사용 ---
function solution(array, commands) {
    var answer = [];
    var count = 0;
    while (count < commands.length) {
      let one = commands[count][0];
      let two = commands[count][1];
      let thr = commands[count][2];
      let sliceArr = array.slice(one - 1, two);
      let sortArr = sliceArr.sort((a, b) => a - b);
      answer.push(sortArr[thr-1]);
      count ++;
    }
    return answer;
  }

  console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))
// 문제 : https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

