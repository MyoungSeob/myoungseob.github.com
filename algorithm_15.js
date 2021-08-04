function solution(array, commands) {
  var answer = [];
  var count = 0;
  while (count < commands.length) {
    let temp = [];
    for (let i = commands[count][0] - 1; i < commands[count][1]; i++) {
      temp.push(array[i]);
    }
    temp.sort((a, b) => a - b);
    answer.push(temp[commands[count][2] - 1]);
    count++;
  }
  return answer;
}

// 문제 : https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

