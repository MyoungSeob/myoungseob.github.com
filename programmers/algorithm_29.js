// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  var answer = 0;

  // 약수가 홀수인 경우는 해당 숫자가 제곱수인지를 판별하면 된다.
  function isSquared(number) {
    // 제곱근이 자연수인지, 실수인지를 판별하여 짝수인지, 홀수인지를 반환
    return Math.sqrt(number) % 1 === 0 ? true : false;
  }
  // 반복문을 통해 약수가 홀수인 경우에는 빼고, 짝수인 경우에는 더하기
  for (let i = left; i <= right; i++) {
    isSquared(i) ? (answer -= i) : (answer += i);
  }
  return answer;
}
