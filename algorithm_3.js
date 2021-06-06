// 다음 큰 숫자

// 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
// 예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

// 자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

// 제한 사항
// n은 1,000,000 이하의 자연수 입니다.
// 입출력 예
// n	result
// 78	83
// 15	23
// 입출력 예 설명
// 입출력 예#1
// 문제 예시와 같습니다.
// 입출력 예#2
// 15(1111)의 다음 큰 숫자는 23(10111)입니다.

function solution(n) {
  var answer = n + 1;
  let Binary = n.toString(2);
//   toString(2)를 이용하여 10진수를 2진수로 나타낼 수 있음
  let countOne = Binary.split("").filter((find) => find === "1").length;
    // split을 이용해서 배열화, filter를 이용해서 1이 들어간 배열만 남기고 이것에 대한 길이만 남김
  while (answer > n) {
      // answer가 n보다 큰 경우(따로 break를 지정해주지 않으면 계속 while문에 같히게 됨)
    if (
      countOne ===
      answer
        .toString(2)
        .split("")
        .filter((find) => find === "1").length
    ) {
      break;
    }
    answer = answer + 1;
  }

  return answer;
}
console.log(solution(78));
