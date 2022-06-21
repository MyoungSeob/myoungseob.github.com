/* 올바른 괄호 문제 (https://programmers.co.kr/learn/courses/13213/lessons/91074)*/

function solution(s) {
  // 빈 배열 생성
  let stack = new Array();
  // 첫 글자가 닫힌 괄호일 경우 무조건 false
  if ([...s][0] === ")") {
    return false;
  }
  // 반복문 실행
  for (const c of [...s]) {
    if (c === "(") {
      // 열린 괄호의 경우 빈 배열에 넣기
      stack.push(c);
    } else {
      // 닫힌 괄호의 경우
      if (stack.length === 0) {
        // stack 배열이 0이 되면 false인 이유는 닫힌 괄호가 빈 배열에 들어가면 없어지지 않기 때문
        return false;
      }
      // 빈 배열에 닫힌 괄호가 들어가게 될 경우 무조건 false가 되기 때문에, 무조건 stack의 배열에는 열린 괄호가 들어있게 되므로, 열린 괄호와 닫힌 괄호가 만나게 되면 서로 없애준다.
      stack.pop();
    }
  }
  // stack이 빈 배열이 아닌 경우 괄호의 짝이 맞지 않은 경우이므로 false return
  // 반대의 경우 true를 리턴한다.
  return stack.length === 0;
}
