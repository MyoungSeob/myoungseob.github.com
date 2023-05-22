// 1 - 빵, 2 - 야채, 3 - 고기 1- 빵 순으로 완료되면 빼야함
// 1 <= ingredient <= 1,000,000

function solution(ingredient) {
  let stack = Array();
  let answer = 0;

  for (let i = 0; i < ingredient.length; i++) {
    const item = ingredient[i];
    stack.push(item);

    if (stack.length > 3) {
      const hamburger = [
        stack[stack.length - 4],
        stack[stack.length - 3],
        stack[stack.length - 2],
        stack[stack.length - 1],
      ];
      if (JSON.stringify(hamburger) === JSON.stringify([1, 2, 3, 1])) {
        stack.pop()
        stack.pop()
        stack.pop()
        stack.pop()
        answer += 1;
      }
    }
  }
  return answer;
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);
