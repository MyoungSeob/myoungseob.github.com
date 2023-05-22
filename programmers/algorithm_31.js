//https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    let map1 = [];
    let map2 = [];
    let answers = [];
    // 배열을 2진법으로 변경 시, 자리수가 다른 경우 0을 추가하여 길이를 맞춰줌
    if (arr1[i].toString(2).length !== n) {
      let array = Array(n - arr1[i].toString(2).length).fill("0");
      map1 = [...array, ...arr1[i].toString(2)];
    } else {
      map1 = arr1[i].toString(2).split("");
    }
    if (arr2[i].toString(2).length !== n) {
      let array2 = Array(n - arr2[i].toString(2).length).fill("0");
      map2 = [...array2, ...arr2[i].toString(2)];
    } else {
      map2 = arr2[i].toString(2).split("");
    }
    // 막힌 공간이 있으면 #을 추가, 없으면 빈칸(" ") 추가
    for (let w = 0; w < n; w++) {
      map1[w] + map2[w] === "11" ? answers.push("#") : null;
      map1[w] + map2[w] === "10" ? answers.push("#") : null;
      map1[w] + map2[w] === "01" ? answers.push("#") : null;
      map1[w] + map2[w] === "00" ? answers.push(" ") : null;
    }
    // 문장들을 합쳐서 answer배열에 추가
    answer.push(answers.reduce((a, b) => a + b));
  }
  return answer;
}
