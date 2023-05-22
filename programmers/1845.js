// 배열 내 다양한 숫자들 중 배열 길이의 / 2 이내에서 가장 많이 들어갈 수 있는 최대의 조합을 선택하면 됨

function solution(nums) {
  const ponketmons = nums.length / 2;
  const set = new Set(nums);

  return set.size >= ponketmons ? ponketmons : set.size;
}

solution([3, 1, 2, 3]);
