// https://leetcode.com/problems/two-sum/
// nums의 배열 중 합쳐서 target이 될 수 있는 index를 리턴

/* 
1. 직관적으로 생각하기
  - 보통 완전탐색으로 시작
  - 문제 상황을 단순화하여 생각하기
  - 문제 상황을 극한화하여 생각하기
2. 자료구조와 알고리즘 활용

3. 메모리 사용
*/

var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i ++) {
    const number = nums[i];
    const diff = target - number;

    if(map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(number, i);
  }

  return []
};

twoSum([2, 7, 11, 15], 9);
