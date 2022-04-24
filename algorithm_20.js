// 문제 : https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  //  rank 배열을 만들어 순위를 매기는데, 각각 맞춘 횟수부터 시작한다. 0개 맞춤, 1개 맞춤, 2개 맞춤...
  const rank = [6, 6, 5, 4, 3, 2, 1];
  // 당첨 번호와 내 로또 번호가 일치한 개수
  const correctNumber = lottos.filter((item) => win_nums.includes(item));
  // 지워진 숫자 번호의 개수 (0의 개수)
  const zeroNumber = lottos.filter((item) => item === 0);
  // 최고 당첨 순위
  const maxNum = correctNumber.length + zeroNumber.length;
  // 최저 당첨 순위
  const minN = correctNumber.length;

  return [rank[maxNum], rank[minN]];
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
