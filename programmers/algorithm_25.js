function solution(n, lost, reserve) {
  let answer = n - lost.length;
  let list = [];
  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i])) {
      reserve = reserve.filter((item) => item !== lost[i]);
      answer++;
    } else {
      list.push(lost[i]);
    }
  }

  for (let i = 0; i < list.length; i++) {
    if (reserve.includes(list[i] - 1)) {
      reserve = reserve.filter((item) => item !== list[i] - 1);
      answer++;
    } else if (reserve.includes(lost[i] + 1)) {
      reserve = reserve.filter((item) => item !== list[i] + 1);
      answer++;
    }
  }

  return answer;
}

solution(5, [2, 4], [1, 3, 5]);
