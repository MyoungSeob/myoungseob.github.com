function solution(arr) {
  const result = arr.filter(item => item !== Math.min(...arr))
  return result.length === 0 ? [-1] : result
}

console.log(solution([4, 3, 2, 1]))
