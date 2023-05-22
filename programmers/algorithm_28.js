// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  var answer = [];
  var stage = [];
  for (let i = 1; i <= N; i++) {
    // 실패한 사람 수 구하기
    const failer = stages.filter((item) => item === i).length;
    // 스테이지 번호와 해당 스테이지의 실패율 stage 배열에 담기
    stage.push([i, failer / stages.length]);
    // stage 배열에 담긴 스테이지 지우기
    stages = stages.filter((item) => item !== i);
  }
  // 스테이지 실패율 순으로 정렬
  stage = stage.sort((a, b) => b[1] - a[1]);
  // 스테이지 실패율 순으로 스테이지 번호 map으로 반환
  answer = stage.map((item) => item[0]);

  return answer;
}
