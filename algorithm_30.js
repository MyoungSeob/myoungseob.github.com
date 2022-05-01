function solution(n) {
  var answer = 0;
  let threeNum;

  // n을 3진법으로 변환 후, 반복문에 사용할 수 있도록 자르기
  threeNum = n.toString(3).split("");
  // 3진법을 반전하지 않고, 자리수 별로 제곱 후 자리수의 숫자만큼 곱해준다면 반전 후 10진법으로 표현한 것과 같아진다.
  for (let i = 0; i < threeNum.length; i++) {
    // ** 은 거듭제곱을 의미
    answer += 3 ** i * Number(threeNum[i]);
  }
  return answer;
}
