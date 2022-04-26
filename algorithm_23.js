function solution(nums) {
  var answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let w = j + 1; w < nums.length; w++) {
        const sumOfThree = nums[i] + nums[j] + nums[w];
        console.log(sumOfThree);
        if (isPrime(sumOfThree)) answer++;
      }
    }
  }

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return answer;
}

solution([1, 2, 3, 4]);
