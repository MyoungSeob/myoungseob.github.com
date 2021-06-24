https://programmers.co.kr/learn/courses/30/lessons/64061
// 프로그래머스 크레인 인형뽑기 문제
function solution(board, moves) {
  var answer = 0;
  let reGraph = [];
  // 기존의 배열을 가로에서 세로로 만들 때 담을 빈 배열
  let resultBasket = [];
  // 뽑은 인형들이 들어갈 배열
  for (let i = 0; i < board.length; i++) {
    let temp = Array();
    reGraph.push(temp);
    for (let j = 0; j < board[i].length; j++) {
      let sero = board[j][i];
      if (sero === 0) {
        continue;
      }
      reGraph[i].unshift(sero);
    }
  }
  // 배열을 가로에서 세로로 바꿔줌
  let count = 0;
  // 담겨있는 인형 배열의 마지막부분을 나타내기위한 수
  while (moves.length >= 1) {
    let number = moves.shift();
    // 크레인이 움직인 지점인 move를 왼쪽에서 뽑아서 사용함
    let doll = reGraph[number - 1].pop();
    // 배열의 순서에 맞게 number에서 1을 뺐고, 해당 배열의 맨 마지막 순서의 숫자를 뽑음
    if (doll === undefined) {
        continue;
    }
    // 해당 배열이 빈 배열(인형이 없는)경우 건너 뜀
    if (resultBasket.length === 0) {
      resultBasket.push(doll);
      continue;
    }
    // 인형 통(resultBasket)이 비어있는 경우 인형을 담고 다음 반복으로 건너 뜀
    if (resultBasket[count] !== doll) {
      resultBasket.push(doll);
      count++;
    // 인형통의 맨 위(stack)의 인형과 뽑은 인형이 같지 않다면, 뽑은 인형을 인형통에 넣고 count를 추가해 줌
    } else {
      resultBasket.pop();
      // 같다면 인형통의 맨 위의 인형을 뽑는다(이렇게 해야 연속으로 중복되는 경우 {ex) 1 2 2 1}를 포함함)
      answer += 2;
      if(count !== 0){
        count -= 1;
      }
    // count가 0인데 같은 경우를 대비함
    }
  }
  return answer;
}

