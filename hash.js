/* 해시 테이블 :키와 값을 받아 키를 해싱(hashing)하여 나오는 index에 값을 저장하는 선형 자료구조
 해시함수 : 입력받은 값을 특정 범위 내 숫자로 변경하는 함수
 문제점 : 해시 함수의 결과가 동일하여 겹치는 결과가 생길 수 있음
 해결책 
 1. 선형탐사법 : 충돌하면 옆으로 한 칸 이동
 2. 제곱탐사법 : 충돌이 발생하면 발생한 횟수의 제곱만큼 옆으로 이동
 3. 이중 해싱 : 충돌이 발생하면 다른 해시 함수를 이용
 4. 분리 연결법 : 버킷의 값을 연결리스트로 사용하여 충돌이 발생하면 리스트에 값을 추가

Example
1. 배열 사용
2. 객체 사용
3. Map() 함수 사용
4. Set() 함수 사용
*/

//베스트 앨범

// function solution(genres, plays) {
//   const genreMap = new Map();
//   let arr = [];
//   let answer = [];
//   const test = genres
//     .map((item, index) => {
//       return {
//         genre: item,
//         play: plays[index],
//         songNumber: index,
//       };
//     })
//     .forEach((item, index) => {
//       genreMap.get(item.genre) == undefined
//         ? genreMap.set(item.genre, {
//             play: item.play,
//             songList: [{ playNumber: item.play, songNumber: item.songNumber }],
//           })
//         : genreMap.set(item.genre, {
//             play: genreMap.get(item.genre).play + item.play,
//             songList: [
//               ...genreMap.get(item.genre).songList,
//               { playNumber: item.play, songNumber: item.songNumber },
//             ],
//           });
//     });

//   for (let x of genreMap.entries()) {
//     arr.push(x[1]);
//   }
//   console.log(arr);
//   arr
//     .sort((a, b) => b.play - a.play)
//     .forEach((item) => {
//       item.songList.sort((a, b) => b.playNumber - a.playNumber);
//       console.log(item);
//       for (let i = 0; i < 2; i++) {
//         answer.push(item.songList[i].songNumber);
//       }
//     });

//   return answer;
// }

function solution(genres, plays) {
  const genreMap = new Map();

  genres
    .map((item, index) => [item, plays[index]])
    .forEach((item, index) => {
      const [genre, play] = item;
      const data = genreMap.get(genre) || { totalPlayNumber: 0, songList: [] };
      genreMap.set(genre, {
        totalPlayNumber: data.totalPlayNumber + play,
        songList: [...data.songList, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  return [...genreMap]
    .sort((a, b) => b[1].totalPlayNumber - a[1].totalPlayNumber)
    .flatMap((item) => item[1].songList)
    .map((item) => {
      return item.index;
    });
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);

/*
    1. 부위별 의상 정리
    2. 부위별 의상 조합
*/

function solution(clothes) {
  const spyClothes = new Map();
  clothes.forEach((item) => {
    if (!spyClothes.get(item[1])) {
      spyClothes.set(item[1], {
        clothes: [item[0]],
      });
    } else {
      const clothe = spyClothes.get(item[1]).clothes;
      spyClothes.set(item[1], {
        clothes: [...clothe, item[0]],
      });
    }
  });

  return [...spyClothes]
    .map((item) => {
      return item[1].clothes.length;
    })
    .reduce((a, b) => {
      return a * b + a + b;
    });
}

function solution(survey, choices) {
  let answer = [];
  const kbti = new Map();
  const scoreList = [0, 3, 2, 1, 0, 1, 2, 3];

  ["R", "T", "C", "F", "J", "M", "A", "N"].forEach((item) => {
    kbti.set(item, {
      score: 0,
    });
  });

  survey.forEach((item, index) => {
    const character = item.split("");
    const score = choices[index];
    choices[index] <= 4
      ? kbti.set(item[0], {
          score: kbti.get(item[0]).score + scoreList[score],
        })
      : kbti.set(item[1], {
          score: kbti.get(item[1]).score + scoreList[score],
        });
  });

  for (let i = 0; i < kbti.size; i += 2) {
    [...kbti][i][1].score >= [...kbti][i + 1][1].score
      ? answer.push([...kbti][i][0])
      : answer.push([...kbti][i + 1][0]);
  }

  return answer.join("");
}
