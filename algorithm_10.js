// 정수 n이 매개변수로 주어집니다.
// 다음 그림과 같이 밑변의 길이와 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후,
// 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return 하도록 solution 함수를 완성해주세요.

// 규칙은 한 변을 지나갈 때마다 점점 작아짐 (ex - 6 -> 5-> 4 -> ...)
function solution(n) {
  let answer = [];
  let graph = [];
  // 삼각형을 배열로 나타내기 위한 graph
  let count = 1;
  let x = 0;
  let y = -1;
  // 꼭대기의 1의 자리에 넣으려면 기본 값이 -1이여야 함
  let number = n;
  for (let i = 1; i < n + 1; i++) {
    let temp = Array(i).fill(0);
    graph.push(temp);
  }
  // Array(i).fill(0)은 i만큼의 길이를 가진 배열을 만들고 0으로 채운다라는 의미
  while (number > 0) {
    for (let i = 0; i < number; i++) {
        // 왼쪽의 변 => 아래로 내려감
      graph[++y][x] = count++;
    }
    for (let i = 0; i < number - 1; i++) {
        // 아래쪽의 변 => 오른쪽으로
      graph[y][++x] = count++;
    }
    for (let i = 0; i < number - 2; i++) {
        // 오른쪽 변 => 위로 올라감
      graph[--y][--x] = count++;
    }
    number -= 3;
    // 이번 문제는 이렇게 3가지 유형으로 만들어진 삼각형임
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < graph[i].length; j++) {
        // graph에 있는 값들을 순서대로 answer배열에 넣기
      answer.push(graph[i][j]);
    }
  }

  return answer;
}
