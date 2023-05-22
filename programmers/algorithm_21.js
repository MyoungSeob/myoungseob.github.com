// 문제  : https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  var answer = s;
  const wordList = [
    [0, "zero"],
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
  ];

  //join 함수 -- 나눠진 문자열을 임의의 값으로 연결 --- 지금과 같은 경우는 i로 연결

  for (let i = 0; i < wordList.length; i++) {
    if (s.includes(wordList[i][1])) {
      // 해당하는 단어를 기준으로 s를 나눔
      let array = answer.split(wordList[i][1]);
      // ["분리된 앞 문자열", "분리된 뒷 문자열"]
      answer = array.join(i);
      // 앞서 분리된 문자열들을 i로 이어줌
    }
  }

  s = s
    .replace(/zero/g, 0)
    .replace(/one/g, 1)
    .replace(/two/g, 2)
    .replace(/three/g, 3)
    .replace(/four/g, 4)
    .replace(/five/g, 5)
    .replace(/six/g, 6)
    .replace(/seven/g, 7)
    .replace(/eight/g, 8)
    .replace(/nine/g, 9);
  console.log(s);
}
