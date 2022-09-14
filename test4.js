function solution(queue1, queue2) {
  const arr = [...queue1, ...queue2];
  const sum = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  if (sum % 2 === 1) {
    return -1;
  }
  const mid = sum / 2;
  let sumQue1 = queue1.reduce((a, b) => {
    return a + b;
  }, 0);
  let start = 0;
  let end = queue1.length;
  let count = 0;
  while (true) {
    if (sumQue1 < mid) {
      sumQue1 += arr[end++];
      count++;
    } else if (sumQue1 > mid) {
      sumQue1 -= arr[end--];
      count++;
    } else if (sumQue1 === mid) {
      break;
    }
  }

  return count;
}

solution([3, 2, 7, 2], [4, 6, 5, 1]);
