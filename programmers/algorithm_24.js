function solution(answers) {
  var answer = [];

  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const score = {
    1: 0,
    2: 0,
    3: 0,
  };

  for (let i = 0; i < answers.length; i++) {
    if (person1[i % person1.length] === answers[i]) score[1]++;
    if (person2[i % person2.length] === answers[i]) score[2]++;
    if (person3[i % person3.length] === answers[i]) score[3]++;
  }

  const max = Math.max(score[1], score[2], score[3]);

  if (score[1] === max) answer.push(1);
  if (score[2] === max) answer.push(2);
  if (score[3] === max) answer.push(3);

  return answer;
}

solution([1, 2, 3, 4, 5]);
