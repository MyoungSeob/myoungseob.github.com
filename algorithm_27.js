// https://programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  var answer = [];
  // 주어진 튜플의 형식을 배열 형식으로 변환
  const setList = s.replace(/{/gi, "[").replace(/}/gi, "]");
  // string화 되어있는 배열을 배열로 변환
  const list = JSON.parse(setList);
  // 튜플의 순서를 확인할 수 있도록 배열을 배열 길이순으로 정렬
  const tupleList = list.sort((a, b) => a.length - b.length);
  // JS 스프레드 문법을 사용하여 answer 배열에 나열
  for (let i = 0; i < tupleList.length; i++) {
    answer.push(...tupleList[i]);
  }
  // 중복되는 값을 제거
  return [...new Set(answer)];
}

solution("{{20,111},{111}}");
