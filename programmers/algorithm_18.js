// https://programmers.co.kr/learn/courses/30/lessons/83201?language=javascript
// 상호평가

function solution(scores) {
  var answer = "";
  let myScore = [];
  let scoreList = [];
  for (let i = 0; i < scores.length; i++) {
    let score = [];
    for (let j = 0; j < scores.length; j++) {
      if (i === j) myScore.push(scores[j][i]);
      score.push(scores[j][i]);
    }
    if (Math.min(...score) === Math.max(...score)) {
      scoreList.push(
        (score.reduce((a, b) => a + b) - Math.min(...score)) /
          (score.length - 1)
      );
    } else {
      let count = 0;
      for (let i = 0; i < score.length; i++) {
        if (myScore[myScore.length - 1] === score[i]) count++;
      }
      if (count > 1) {
        scoreList.push(score.reduce((a, b) => a + b) / score.length);
      } else {
        Math.min(...score) === myScore[myScore.length - 1]
          ? scoreList.push(
              (score.reduce((a, b) => a + b) - Math.min(...score)) /
                (score.length - 1)
            )
          : "";
        Math.max(...score) === myScore[myScore.length - 1]
          ? scoreList.push(
              (score.reduce((a, b) => a + b) - Math.max(...score)) /
                (score.length - 1)
            )
          : "";
        Math.max(...score) !== myScore[myScore.length - 1] &&
        Math.min(...score) !== myScore[myScore.length - 1]
          ? scoreList.push(score.reduce((a, b) => a + b) / score.length)
          : "";
      }
    }
  }
  for (let i = 0; i < scoreList.length; i++) {
    if (scoreList[i] >= 90) {
      answer += "A";
    } else if (scoreList[i] >= 80) {
      answer += "B";
    } else if (scoreList[i] >= 70) {
      answer += "C";
    } else if (scoreList[i] >= 50) {
      answer += "D";
    } else {
      answer += "F";
    }
  }
  return answer;
}