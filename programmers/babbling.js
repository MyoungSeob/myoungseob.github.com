/* https://school.programmers.co.kr/learn/courses/30/lessons/120956?language=javascript */

function solution(babbling) {
  let answer = 0;
  let temp = "";
  const ableBabbling = ["aya", "ye", "woo", "ma"];
  for (let i = 0; i < babbling.length; i++) {
    const string = [...babbling[i]];
    for (let j = 0; j < string.length; j++) {
      temp = temp + string[j];
      if (ableBabbling.includes(temp) && temp.length > 1) {
        temp = "";
      }
    }
    temp === "" ? (answer += 1) : (temp = "");
  }
  return answer;
}

solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]);
