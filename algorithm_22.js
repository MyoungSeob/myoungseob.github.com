function solution(numbers, hand) {
  var answer = "";
  var rightHand = 12;
  var leftHand = 10;

  const rightList = [3, 6, 9, 12];
  const leftList = [1, 4, 7, 10];
  const centerList = [0, 2, 5, 8, 11];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      numbers[i] = 11;
    }
    if (rightList.includes(numbers[i])) {
      rightHand = numbers[i];
      answer += "R";
    } else if (leftList.includes(numbers[i])) {
      leftHand = numbers[i];
      answer += "L";
    } else if (centerList.includes(numbers[i])) {
      const rightDistance =
        Math.abs(rightHand - numbers[i]) % 3 === 0
          ? Math.abs(rightHand - numbers[i]) / 3
          : Math.abs(rightHand - numbers[i]) % 3 === 1
          ? Math.abs(rightHand - numbers[i]) / 3 + 1
          : Math.abs(rightHand - numbers[i]) / 3 + 2;
      //   const rightDistance = Math.abs(rightHand - numbers[i]) % 3;
      const leftDistance =
        Math.abs(leftHand - numbers[i]) % 3 === 0
          ? Math.abs(leftHand - numbers[i]) / 3
          : Math.abs(leftHand - numbers[i]) % 3 === 1
          ? Math.abs(leftHand - numbers[i]) / 3 + 1
          : Math.abs(leftHand - numbers[i]) / 3 + 2;
      if (Math.floor(rightDistance) < Math.floor(leftDistance)) {
        rightHand = numbers[i];
        answer += "R";
      } else if (Math.floor(leftDistance) < Math.floor(rightDistance)) {
        leftHand = numbers[i];
        answer += "L";
      } else if (Math.floor(rightDistance) === Math.floor(leftDistance)) {
        if (hand === "right") {
          rightHand = numbers[i];
          answer += "R";
        } else {
          leftHand = numbers[i];
          answer += "L";
        }
      }
    }
  }
  return answer;
}

function getDistance(rightNumber, leftNumber, standardNumber) {
  return rightDistance, leftDistance;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
