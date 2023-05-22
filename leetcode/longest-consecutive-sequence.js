// https://leetcode.com/problems/longest-consecutive-sequence/
// O(n)의 시간복잡도를 사용해야만 함.
// map에 들어가는 수마다 -1이 있는지 여부에 따라 count를 늘려야 할듯
// map에 넣을 때마다 현재 있는 값의 -1, +1 여부를 확인하고 넣어야 할듯
// 시작 부분을 찾아야 하는데, 시작 부분은 이 수보다 작은 수가 있는지를 찾아야 함.

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let answer = 0;
  const set = new Set(nums);

  for (let number of [...set]) {
    if (set.has(number - 1)) {
      continue;
    }

    let count = 0;
    let temp = 0;
    while (set.has(number + count)) {
      temp += 1;
      count += 1;
    }
    answer = Math.max(answer, temp);
  }

  return answer;
};

longestConsecutive([100]);
