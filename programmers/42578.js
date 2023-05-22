function solution(clothes) {
  let answer = 1;
  const map = new Map();
  clothes.forEach((item) => {
    map.set(item[1], map.has(item[1]) ? map.get(item[1]) + 1 : 1);
  });

  for (let [_, value] of [...map]) {
    answer *= (value + 1);
  }

  return answer - 1;
}

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
