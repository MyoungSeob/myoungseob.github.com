// https:programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  var answer = 0;

  // 폰캣몬의 종류 중복을 없애는 Set함수 사용 -> 배열 내 중복값 제거
  const setList = [...new Set(nums)];
  // 선택할 수 있는 폰캣몬의 수가 최댓값이 되어야 하고, 선택할 수 있는 폰캣몬의 종류가 고를 수 있는 폰캣몬의 수보다 적은 경우
  // 총 2가지의 경우를 반환
  nums.length / 2 <= setList.length
    ? (answer += nums.length / 2)
    : (answer += setList.length);

  return answer;
}

solution([3, 1, 2, 3]);
